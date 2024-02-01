import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mix.css"
import {Fade} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background:"grey" ,top:"-10%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style ,backgroundColor:"grey",left:"92%" ,top:"-10%" }}
        onClick={onClick}
      />
    );
  }




export default function Cards2() {
    const value="Show all".toLocaleLowerCase()
    const data = [
        {
            img: "/images/imgv1.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        }, {
            img: "/images/imgv2.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price:"From $365/per person"
        }, 
        {
            img: "/images/imgv6.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        }, {
            img: "/images/imgv5.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price:"From $365/per person"
        },{
            img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        }, {
            img: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1440",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        },
        {
            img: "https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1440",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        }, {
            img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price:"From $365/per person"
        },
        {
            img: "/images/imgv6.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price: "From $365/per person"
        }, {
            img: "/images/imgv5.jpg",
            rating:"4.59 (3,3337).Czech Republic",
            desc:"Most popular around the world",
            Price:"From $365/per person"
        }
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 1,
        draggable: true,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />,
        
    }
    return (
        <div style={{ width: "95%",height:"50%", marginTop:"30px",marginLeft:"30px"}}>
        <div style={{marginTop:"30px",marginBottom:"50px",width:"100%" }}>
            <h2>Top Sellers</h2>
        <Slider {...settings}>
            {data.map((d) => (
                <div style={{height:"500px",gap:"6px",}}>
                    <FavoriteBorderIcon style={{marginLeft:"120px",width:"150px",position:"absolute",top:"1px",color:"white"}}/>
                    <div style={{width:"480px"}}>
                        <Fade in={true} timeout={1000}>
                    <img style={{transition:"transform 0.3s ease-in-out",'&:hover':{transform:'scale(1.1)'},width:"220px",height:"240px",borderRadius:"10px"}} src={d.img} alt="photo"/>
                    </Fade>
                    
                    </div>
                    <div style={{display:"flex"}}>
                    <StarIcon style={{marginTop:"10px"}}/>
                    <p style={{marginTop:"0", marginLeft:"10px",width:"160px",color:"black",marginBottom:"0", fontWeight:"100"}}>{d.rating}</p>
                    </div>
                    <div>
                    <p style={{ marginTop:"0",width:"150px",color:"black", fontWeight:"400"}}>{d.desc}</p>
                    </div>
                    <div style={{}}>
                    <p style={{fontWeight:"bold",width:"170px",color:"black"}}>{d.Price}</p>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
</div>
    );
}

