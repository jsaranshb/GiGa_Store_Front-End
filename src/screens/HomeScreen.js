import React from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { Row, Col } from 'react-bootstrap';
import Product from "../components/Product";
import ErrorMssg from "../components/ErrorMssg";
import {listProducts} from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

function HomeScreen() {
    const dispatch = useDispatch();
    
    const productList = useSelector(state => state.productList);
    const { error, loading, products } = productList;
    
    useEffect(()=>{
        dispatch(listProducts());
    },[]);

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
            : error ? <ErrorMssg />
            :
            <Row>
                {products.map(product=>(
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product = {product} />
                    </Col>
                ))}
            </Row>
            }
        </div>
    );
}
export default HomeScreen;