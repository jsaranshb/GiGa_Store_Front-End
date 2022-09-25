import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from "./Rating";

function Product({product}) {
    return (
        // <h1>Hello...</h1>
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.cover_image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <strong> {product.name} </strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#ff4000'} />
                </div>
            </Card.Text>
            <Card.Text>
                <h3>Rs.{product.price}</h3>
            </Card.Text>
        </Card>
    );
}
export default Product;