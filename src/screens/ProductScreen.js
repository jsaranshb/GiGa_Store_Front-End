import React from "react";
import { useState, useEffect } from "react";
import {Row,Col,Image,Card,ListGroup,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {detailProducts} from '../actions/productAction';
import Loader from "../components/Loader";
import ErrorMssg from "../components/ErrorMssg";
import {useNavigate} from 'react-router-dom';

function ProductScreen() {
    const {id} = useParams(); 
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();

    const productDetailList = useSelector(state => state.productDetailList);
    const { error, loading, product } = productDetailList;
    
    useEffect(()=>{
        dispatch(detailProducts(id));
    },[]);
    
    const addToCartHandler = ()=>{
        console.log('clicked');
        navigate(`/cart/${id}?qty=${qty}`);
    }

    return (
        <div>
            <Link to="/" className="btn btn-outline-danger"> Go Back </Link>
            {loading ? <Loader />
            : error ? <ErrorMssg />
            :
            <Row className="productdetail">
                <Col md={6}>
                    <Image src={product.cover_image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item varient="info"><h5>{product.name}</h5><strong>Brand: </strong>{product.brand}</ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#ff198f'} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: Rs.{product.price}</ListGroup.Item>
                        <ListGroup.Item><strong>Description: </strong>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col><strong>Rs. {product.price}</strong></Col>
                                </Row>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{product.countInStock > 0 ? 'InStock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock>0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <select
                                            value={qty}
                                            onChange={e=>setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1} > {x+1} </option>
                                                ))}
                                            </select>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item className="d-grid gap-2">
                                <Button 
                                variant="warning" 
                                disabled={product.countInStock == 0} 
                                onClick={addToCartHandler}
                                >Add to Cart
                                </Button>
                                <Button 
                                variant="outline-danger"
                                >Add to Wish List <i class="fa-solid fa-heart"></i>
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            }
        </div>
    );
}
export default ProductScreen;
