import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from "axios"

export default function Freebook() {

  const [book, setBook]=useState([])

  useEffect(()=>{
      const getBook=async()=>{
          try {
              const res=await axios.get('http://localhost:4001/book')
              console.log("object",res)
              setBook(res.data.filter((data)=>data.category==="Free"))
          } catch (error) {
              console.log("error", error)
          }
      }
      getBook()
  },[])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-20'>

   <div>
   <h1 className='text-xl font-semibold pb-2 '>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam earum provident ipsam iusto accusamus optio sapiente atque necessitatibus voluptatibus fugiat, incidunt molestias pariatur animi totam voluptates deserunt hic temporibus eaque.</p>
   </div>
    

    <div>
          <Slider {...settings}>
        {
            book.map((data)=>(
                <Card item={data} key={data.id}/>
            ))
        }
    </Slider>
    </div>
    </div>
   </>
  )
}
