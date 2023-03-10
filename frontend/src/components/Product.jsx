import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import s from './product.module.css'
//-----
function Product() {

    let [data, setData] = useState()
    let msg = useRef()

    useEffect(() => {
        axios.get("http://localhost:3001/category")
            .then((res) => {
                setData(res.data)
                console.log("Category details received โ");
            })
            .catch(() => {
                console.log("Error fetching category details ๐");
            })
    }, [])
    //-----

    let [prodName, setProdName] = useState("");
    let [category, setCategory] = useState("");
    let [image, setImage] = useState("");
    let [categoryDesp, setCategoryDesp] = useState("");
    let [features, setFeatures] = useState("")
    //-----

    // console.log(prodName);
    // console.log(category);
    // console.log(categoryDesp);
    // console.log(features);
    // console.log(image);
    //-----
    //-----
    
    function submitForm(e) {
        e.preventDefault()
        if(prodName === "" | category === "" | image === "" | categoryDesp === "" | features === ""){
            msg.current.style = "color: red"
            msg.current.innerHTML = "Fill all the details! ๐คจ"
            setTimeout(()=>{
              msg.current.style = "border: none"
              msg.current.innerHTML=""
            },3000)
        }
        else{
            axios.post("http://localhost:3001/product", {
                "productname": `${prodName}`,
                "category": `${category}`,
                "catdesp": `${categoryDesp}`,
                "features": `${features}`,
                "image":`${image}`
            })
                .then(() => {
                    msg.current.style = 'color: green'
                    msg.current.innerHTML = "Details Saved! โ"
                    console.log("Category details saved โ");
                    setTimeout(()=>{
                      msg.current.innerHTML=""
                      msg.current.style = "border: none"
                    },3000)
                })
                .catch(() => {
                    console.log("Error saving product details ๐");
                })
        }
    }
    //-----

    return (
        <div id={s.product}>

            <h2>Create Product</h2>

            <form id={s.form}>

                <h3>Product Name:</h3>
                <span>
                    <input type="text" placeholder='Name' id={s.productName}
                        onChange={
                            (e) => {
                                setProdName(e.target.value)
                            }
                        } />
                </span>

                <div id={s.selectCategory}>

                    <h3>Category: </h3>

                    <select name="Category"
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                        <option>Select</option>
                        {
                            data?.map((data) => {
                                return (
                                    <option key={data.id}>
                                        {data.categoryname}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <h3>Product Image: </h3>
                <span>
                    <input type="file" id={s.fileInput} accept="image/*"
                        onChange={(e)=>{
                            let path = e.target.value
                            path = path.replace(/^.*\\/, "")
                            setImage(path)
                        }} />
                </span>

                <textarea name="description" cols="30" rows="7" placeholder='Category Description'
                    onChange={(e) => {
                        setCategoryDesp(e.target.value)
                    }}></textarea>

                <textarea name="features" cols="30" rows="7" placeholder='Product Features'
                    onChange={(e) => {
                        setFeatures(e.target.value)
                    }}></textarea>

                <input type="submit" id={s.btn} onClick={submitForm} />
                <div id={s.msg} ref={msg}></div>
            </form>
        </div>
    )
}

export default Product