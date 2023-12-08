import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='home'> 
    <main>
        <h1>KnockedOut</h1>
        <p>All you can get</p>
    </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        Unleash your inner champion with K.O Gear Hub, your ultimate destination for top-quality boxing essentials. At K.O, we believe in the power of precision, dedication, and knockout performance. Our curated selection of boxing gear is designed to elevate your training and performance to new heights.
        </p>
    </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Why choose K.O?</h1>
            <p>Premium Quality: Our gear is crafted with precision and durability, ensuring you perform at your best every time.<br/>
                Style Meets Function: Discover a blend of cutting-edge design and functionality in our stylish range of boxing apparel and accessories.<br/>
                Knockout Deals: Experience unbeatable value with our competitive prices and exclusive offers.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>

                <div style={{
                    animationDelay:"0.3s",
                }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>

                </div>

                <div style={{
                    animationDelay:"0.5s",
                }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>

                </div>

                <div style={{
                    animationDelay:"0.7s",
                }}>
                        <AiFillYoutube />
                        <p>Youtube</p>

                </div>

                <div style={{
                    animationDelay:"1s",
                }}>
                        <AiFillInstagram />
                        <p>Instagram</p>

                </div>
            </article>
        </div>
    </div>
    
    </>
  )
}

export default Home