import axios from 'axios';
import React, { useEffect, useState } from 'react'
import s from './product.module.css'
//-----
function Product() {

    let [data, setData] = useState()

    useEffect(() => {
        axios.get("http://localhost:3001/category")
            .then((res) => {
                setData(res.data)
                console.log("Category details received ✔");
            })
            .catch(() => {
                console.log("Error fetching category details 😒");
            })
    }, [])
    //-----

    let [prodName, setProdName] = useState("");
    let [category, setCategory] = useState("");
    let [image, setImage] = useState();
    let [categoryDesp, setCategoryDesp] = useState("");
    let [features, setFeatures] = useState("")
    //-----

    // console.log(prodName);
    // console.log(category);
    // console.log(image);
    // console.log(categoryDesp);
    // console.log(features);
    //-----

    const getImageUrl = (e) => {
        let value = (e.target.files[0]);
        setImage([value]);
    }
    //-----

    function submitForm(e) {
        axios.post("http://localhost:3001/product", {
            "productname": `${prodName}`,
            "category": `${category}`,
            "catdesp": `${categoryDesp}`,
            "features": `${features}`
        })
            .then(() => {
                console.log("Product details saved ✔");
            })
            .catch(() => {
                console.log("Error saving product details 😒");
            })
        e.preventDefault()
    }
    //-----

    return (
        <div id={s.product}>

            <h2>Create Product</h2><br />

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
                    <input type="file" id={s.fileInput} accept="image/png, image/jpeg, image/ico"
                        onChange={getImageUrl} />
                </span>

                <textarea name="description" cols="30" rows="8" placeholder='Category Description'
                    onChange={(e) => {
                        setCategoryDesp(e.target.value)
                    }}></textarea>

                <textarea name="features" cols="30" rows="8" placeholder='Product Features'
                    onChange={(e) => {
                        setFeatures(e.target.value)
                    }}></textarea>

                <input type="submit" id={s.btn} onClick={submitForm} />

            </form>
        </div>
    )
}

export default Product