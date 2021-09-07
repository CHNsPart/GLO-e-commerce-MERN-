import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className="my-3 pp-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img 
                src={product.image}
                variant="top"
                />
            </a>
            <Card.Body>
                <a style={{textDecoration:"none"}} href={`/product/${product._id}`}>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                </a>
                <Card.Text as="h6">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between pt-3">
                    <Card.Text as="h3">
                        <span style={{fontSize:"30px"}}>৳</span>{product.price}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product
