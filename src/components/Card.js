import React from 'react'

const Card = ({item}) => {
    return (
        <div className="card" >
            <img src={item.avatar} alt="..." />
            <p><strong>Name:</strong> {item.first_name} {item.last_name}</p>
            <p><strong>Email:</strong> {item.email}</p>
        </div>
    )
}

export default Card