import React from 'react'
import { Spinner } from "react-bootstrap"


const Loader = () => {
    return (
        <>
            <Spinner 
                as="span"
                variant="primary"
                animation="grow"
                role="status"
                style={{
                    width:"100px",
                    height: "100px",
                    margin: "auto",
                    display:"block"
                }} >
            </Spinner>
        </>
    )
}

export default Loader
