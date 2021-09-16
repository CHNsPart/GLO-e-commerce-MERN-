import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap' 
import Rating from '../components/Rating'
import products from '../product'

const ProductScreen = ({ match }) => {

    const product = products.find( (p) => p._id ===  match.params.id )
    const image = products.image

    return (
        <>
            <Link className="btn btn-light my-3" to="/home">
                Go Back
            </Link>
            
            <Row>
                <Col md={6}>
                    <Image className="mb-4" src="../images/vibestick.jpg" alt={product.name} fluid />
                </Col>
                <Col sm={12} md={6}>
                    <ListGroup variant="flush" >

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item className="d-flex"> 
                            <h1 style={{fontWeight:"bold", color:"#1778F2"}}>
                                {product.price}
                            <span
                            style={{fontSize:"40px", marginRight :"5px"}}>
                            ৳
                            </span>
                            </h1>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews}reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Descriptin: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                <Col md={12}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Category
                                    </Col>
                                    <Col>
                                        <strong>
                                                {product.category}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 
                                    <span style={{color:"#5cb85c"}}>
                                        In Stock
                                    </span>
                                    : 
                                    <span style={{color:"#d9534f"}}>
                                        Out of Stock
                                    </span>
                                    }
                                </Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant="flush">
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup>
                    </Card>
                </Col>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
