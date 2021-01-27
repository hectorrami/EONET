import React from 'react'
import spinner from '../spinner.gif'

const Load = () => {
    return (
        <div className="load">
            <img src={spinner} alt="loading" />
        </div>
    )
}

export default Load
