import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from '../css/Home.module.css'

const Home = (props) => {
    const [bread, setBread] = useState([]);

    const countUp = (event) => {
        var newAmount = bread.amount
        console.log(newAmount)
    }

    const countDown = (event) => {

    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then(response=>{
            console.log(response.data.products)
            setBread(response.data.products);
        })
    }, []);

    return(
        <>
            <div className={styled.banner}>
                <h1 className={styled.title}>Bread Bread Bread</h1>
                <p className={styled.subtitle}>From its humble begings to its delicious results. We're here the entire journey</p>
            </div>

            <div className={styled.allBreads}>
                {
                    bread.map((item,i) => {
                        return <div key={i} className={styled.breadBox}>
                            <p className={styled.title}>{item.title}</p>
                            <p className={styled.price}><strong>Price:</strong> ${item.price}</p>
                            <p className={styled.description}>{item.description}</p>
                            <p className={styled.amount}><strong>Amount: </strong> {item.amount} </p>
                            <div className={styled.buttons}>
                                <a onClick={countUp}>Add</a>
                                <a onClick={countDown}>Remove</a>
                                <a href="">Delete</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Home;