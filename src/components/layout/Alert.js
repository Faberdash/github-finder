import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const Alert = ({ alert }) => {
    return (
        (alert !== null) && (
            <div className={`alert alert-${alert.type}`}>
                <FaInfoCircle /> <h6 style={{ display: "inline" }}>{alert.message}</h6>
            </div>
        )
    )
}

export default Alert
