import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Counter</p>
        </div>

        <div>
            <img src={img2} alt="Item3" />
            <p className='legend'>Pose</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Services