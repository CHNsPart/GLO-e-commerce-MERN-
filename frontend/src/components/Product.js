import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from "./Rating"
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card className="my-3 pp-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img 
                src={product.image}
                variant="top"
                />
            </Link>
            <Card.Body>
                <Link style={{textDecoration:"none"}} to={`/product/${product._id}`}>
                    <Card.Title style={{height:"60px"}}>
                        {product.name}
                    </Card.Title>
                </Link>
                <Card.Text as="h6">
                    <Rating
                        value={product.rating}
                        text={` ${product.numReviews} reviews`} 
                    />
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between pt-3">
                    <Card.Text as="h3">
                        <span
                            style={{fontSize:"30px"}}
                        >
                            ৳
                        </span>
                        {product.price}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </div>
            </Card.Body>
        </Card>
    )
}



export default Product
