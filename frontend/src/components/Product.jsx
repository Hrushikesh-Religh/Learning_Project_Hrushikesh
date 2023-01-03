import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import s from './product.module.css'
//-----
function Product() {

    let [data,setData] = useState()
    useEffect(()=>{
        axios.get("http://localhost:3001/category")
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
            console.log("Data Received ✔");
        })
        .catch(()=>{
            console.log("Error 😒");
        })
    },[])

    
    let [prodName, setProdName] = useState("");
    let [category, setCategory] = useState("");
    let [image, setImage] = useState();
    let [categoryDesp, setCategoryDesp] = useState("");
    let [features, setFeatures] = useState("")
    //-----
    let val = useRef();
    // category = val.current.value;
    //-----
    console.log(prodName);
    console.log(category);
    console.log(image);
    console.log(categoryDesp);
    console.log(features);
    //-----
    const getImageUrl = (e) => {
        let value = (e.target.files[0]);
        setImage([value]);
    }
    //-----
    function submitForm(e) {
        axios.post("http://localhost:3001/product", {
            "productname":`${prodName}`,
            "category":`${category}`,
            "catdesp":`${categoryDesp}`,
            "features":`${features}`
            // "category":`${category}`
        })
            .then(() => {
                console.log("Data saved ✔");
            })
            .catch(() => {
                console.log("Error 😒");
            })
        e.preventDefault()
    }
    //-----
    return (
        <div id={s.product}>
            <h2>Create Product</h2>
            <form action="" id={s.form}>
                <h3>Product Name:</h3>
                <span><input type="text" placeholder='Name' id={s.productName}
                    onChange={
                        (e) => {
                            setProdName(e.target.value)
                        }
                    } /></span><br />
                <div id={s.selectCategory}>
                    <h3>Category:</h3> <select name="Category" id="" 
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        <option>Select</option>
                         {
                            data?.map((data)=>{
                                return(
                                    <option key={data.id}>
                                        {data.categoryname}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div><br />
                <h3>Product Image: </h3>
                <span><input type="file" id={s.fileInput} accept="image/png, image/jpeg, image/ico"
                    onChange={getImageUrl} /></span><br />
                <textarea name="description" id="" cols="30" rows="8" placeholder='Category Description' onChange={(e) => {
                    setCategoryDesp(e.target.value)
                }}></textarea><br />
                <textarea name="features" id="" cols="30" rows="8" placeholder='Product Features' onChange={(e) => {
                    setFeatures(e.target.value)
                }}></textarea><br />
                <input type="submit" id={s.btn} onClick={submitForm} />
            </form>
        </div>
    )
}

export default Product