import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Fade} from '@mui/material'

import { Button } from "@mui/material";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,background:"grey" ,top:"-10%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,backgroundColor:"grey",left:"92%" ,top:"-10%"}}
        onClick={onClick}
      />
    );
  }

//button arrows
function SampleNextArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,background:"lightgrey",right:"0px", borderRadius:"25px",marginRight:"0px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,backgroundColor:"lightgrey", borderRadius:"25px"}}
      onClick={onClick}
    />
  );
}






export default function Cards () {
    const value="Show all".toLocaleLowerCase()
    const data = [
        {
            img: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1440",
            title:"Collection",
            name: "Most popular around the world"
        }, {
            img: "https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1440",
            title:"Collection",
            name: "Easy for itinerary planning"
        }, {
            img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440",
            title:"Collection",
            name: "Great for team building"
        }, {
            img: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1440",
            title:"Collection",
            name: "Fun for the family"
        },
        {
            img: "https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1440",
            title:"Collection",
            name: "Easy for itinerary planning"
        }, {
            img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440",
            title:"Collection",
            name: "Great for team building"
        }
    ]
    const settings = {
        className:'card1',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
    }
    const settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:13,
        slidesToScroll: 1,
        draggable: true,
        arrows:true,
        nextArrow: <SampleNextArrow1 />,
        prevArrow: <SamplePrevArrow1 />
        
    }
    return (
        <div style={{ width: "95%",height:"20%", marginTop:"30px",marginLeft:"25px"}}>
                <div style={{marginTop:"30px",marginBottom:"50px",width:"100%" }}>
                    <h1>New This Week</h1>
                    
                <Slider {...settings} >
                    {data.map((d) => (
                        <div style={{height:"500px",gap:"6px"}}>
                            <div style={{width:"480px"}}>
                              <Fade in={true} timeout={1000}>
                            <img style={{transition:"transform 0.5s ease",'&:hover':{transform:'scale(1.1)'},width:"390px",height:"230px",borderRadius:"10px"}} src={d.img} alt="photo"/>
                            </Fade>
                            </div>
                            <div>
                                <Button style={{marginLeft:"10px",height:"25px",'&:hover':{background:'blue',border:'none'},background:"white",position:"absolute",top:"200px",color:"black",backgroundColor:"white"}}>{value}</Button>
                            </div>
                            <div>
                                <h6 style={{marginLeft:"20px",width:"150px",position:"absolute",top:"-10px",color:"white"}}>{d.title}</h6>
                            </div>
                            <div style={{}}>
                                <h3 style={{marginLeft:"20px",width:"170px",position:"absolute",top:"13px",color:"white"}}>{d.name}</h3>
                            </div>
                        </div>
                    ))}
                     </Slider>
                </div>

                <div className="btn" style={{width:"95%"}}>
                  
        <Slider {...settings1} >
            
          <div>
            <button>Home</button>
          </div>
          <div>
          <button>Place</button>
          </div>
          <div>
          <button>Room</button>
          </div>
          <div>
          <button>Decor</button>
          </div>
          <div>
          <button>Nature</button>
          </div>
          <div>
            <button>Home</button>
          </div>
          <div>
          <button>Place</button>
          </div>
          <div>
          <button>Room</button>
          </div>
          <div>
          <button>Decor</button>
          </div>
          <div>
          <button>Nature</button>
          </div>
          <div>
            <button>Home</button>
          </div>
          <div>
          <button>Place</button>
          </div>
          <div>
          <button>Room</button>
          </div>
          <div>
          <button>Decor</button>
          </div>
          <div>
          <button>Nature</button>
          </div>
          </Slider>
      </div>
        </div>
    );
}

























// import React from 'react'
// import './mix.css'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// function Cards(){

//     const collectionData=[
//     {  
//         name:'collection',
//         img:'/images/img4.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh'
//     },
//     {   
//         name:'collection',
//         img:'/images/img2.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh'
//     },
//     {   
//         name:'collection',
//         img:'/images/img3.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh'
//     },
//     {   
//         name:'collection',
//         img:'/images/img5.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh'
//     },
//     {
//         name:'collection',
//         img:'/images/img6.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh dhgf'
//     },
//     {
//         name:'collection',
//         img:'/images/img2.jpg',
//         review:'Lorem sgjsf dhfgdsfh fjhgdsh'
//     }
// ]
// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };

// return(
//   <div className='App'>
//   {collectionData.map((d)=>(
//     <div className='card'>
//         <div className='card-top'>
//             <img src={d.img} alt={d.name}/>
//             <p>{d.name}</p>
//         </div>
//         <div>
//             </div>
//     </div>
    
//   ))}
//   </div>
     
// )
  
// }
// export default Cards;