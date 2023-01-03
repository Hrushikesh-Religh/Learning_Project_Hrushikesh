import React from 'react'
import s from './main.module.css'
import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Main() {

    return (
        <div id={s.mainSection}>
            <div id={s.search}>
                <input type="text" placeholder='Search' /><i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div id={s.navbar}>
                <ul>
                    <li>Home</li>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                </ul>
            </div>
            <Carousel autoPlay interval="3000" transitionTime="300" infiniteLoop showStatus={false} showThumbs={false} >
                <div>
                    <img src={img1} alt="img1" className={s.slideimg} />
                </div>
                <div>
                    <img src={img2} alt="img1" className={s.slideimg} />
                </div>
                <div>
                    <img src={img3} alt="img1" className={s.slideimg} />
                </div>
                <div>
                    <img src={img4} alt="img1" className={s.slideimg} />
                </div>
                <div>
                    <img src={img5} alt="img1" className={s.slideimg} />
                </div>
            </Carousel>
            <div id={s.product}>
                <div id={s.productSpan}>
                    <span>Product 1</span>
                    <span>Product 2</span>
                    <span>Product 3</span>
                    <span>Product 4</span>
                    <span>Product 5</span>
                    <span>Product 6</span>
                </div>
            </div>
            <footer id={s.footer}>
                END
            </footer>
        </div>
    )
}

export default Main