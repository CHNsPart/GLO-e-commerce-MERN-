import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {
    return (
            <Container fluid="md">
                <Row style={{marginTop: "20rem",
                            textAlign: "center",}} >
                        <a style={{
                        }} href="/home">
                            <Button>Get Started</Button>
                        </a>
                </Row>
            </Container>            
    )
}

export default LandingPage
