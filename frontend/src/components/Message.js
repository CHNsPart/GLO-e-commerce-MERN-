import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant,children}) => {
    return (
        <Alert varian={variant}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: "info"
}

export default Message
