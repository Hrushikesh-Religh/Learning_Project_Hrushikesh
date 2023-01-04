import s from './main.module.css'
import React, { useEffect, useState } from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'
//-----
function Main() {

    let [category, setCategory] = useState([])
    let [product, setProduct] = useState([])
    let [search, setSearch] = useState("")
    //-----
    console.log(search);
    //-----
    //Fetching all the categories
    useEffect(() => {
        const fetchAllCategory = async () => {
            try {
                const res = await axios.get("http://localhost:3001/category")
                setCategory(res.data)
                console.log("Category data fetched 👍");
            } catch (err) {
                console.log("Error fetching category data 😒");
            }
        }
        fetchAllCategory();
    }, [])

    //Fetching all the products
    useEffect(() => {
        axios.get("http://localhost:3001/product")
            .then((res) => {
                setProduct(res.data)
                console.log("Product data fetched 👍");
            })
            .catch(() => {
                console.log("Error fetching products data 😒");
            })
    }, [])
    //-----
    //Fetching data for search 
    useEffect(() => {
        axios.get(`http://localhost:3001/product/${search}`)
            .then((res) => {
                setProduct(res.data)
                console.log("Search data fetched 🔍");
            })
            .catch(() => {
                console.log("Error fetching search results 😒");
            })
    }, [search])

    //Display products specific to category
    function displayRelProd(id) {
        axios.get(`http://localhost:3001/category/${id}`)
            .then((res) => {
                setProduct(res.data)
                console.log("Product data fetched 👍");
            })
            .catch(() => {
                console.log("Error fetching specific category data 😒");
            })
    }

    //-----
    return (
        <div id={s.mainSection}>
            {/* search  */}
            <div id={s.search}>
                <input type="text" placeholder='Search'
                    onChange={(e) => {
                        e.preventDefault();
                        setSearch(e.target.value)
                        if (e.target.value === "") {
                            axios.get(`http://localhost:3001/product`)
                                .then((res) => {
                                    setProduct(res.data)
                                })
                                .catch(() => {
                                    console.log("Error fetching search data 😒");
                                })
                        }
                    }} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* navbar */}
            <div id={s.navbar}>
                <ul>
                    <li onClick={
                        () => {
                            axios.get(`http://localhost:3001/product`)
                                .then((res) => {
                                    setProduct(res.data)
                                    console.log("Navbar data fetched 👍");
                                })
                                .catch(() => {
                                    console.log("Error fetching navbar data 😒");
                                })
                        }}>Home</li>
                    {
                        category?.map(category => {
                            return (
                                <li key={category.id}
                                    onClick={() => { displayRelProd(category.id) }}>{category.categoryname}</li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* image carousel */}
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

            {/* displaying products */}
            <div id={s.product}>
                <div id={s.productSpan}>
                    {
                        product?.map(product => {
                            return (
                                <span id={s.productCard} key={product.id}>
                                    <span><b>Name: </b>{product.productname}</span>
                                    <span><b>Desc: </b>{product.catdesp}</span>
                                    <span><b>Features: </b>{product.features}</span>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            {/* footer */}
            <footer id={s.footer}>
                Religh Technologies - Learning Projcet
            </footer>
        </div>
    )
}

export default Main