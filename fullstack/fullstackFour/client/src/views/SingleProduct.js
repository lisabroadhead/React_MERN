
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '../css/Single.module.css'

const SingleProduct = (props) => {
    const { id } = useParams();
    const [single,setSingle] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then(response=>{
            setSingle(response.data.product);
        })
    }, []);

    return(
        <>
            <div className={styled.banner}>
                <h1>{single.title}</h1>
                <p className={styled.subtitle}>{single.description}</p>
                <p className='price'><strong>Price: </strong> ${single.price}</p>
                <p className='amount'><strong>Amount: </strong> {single.priamountce} {single.type}</p>
                <Link className="button" to={`/edit/product/${single._id}`}>Edit Product</Link>
            </div>
        </>
    )
}

export default SingleProduct;