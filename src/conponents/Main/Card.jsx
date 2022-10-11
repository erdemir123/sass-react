import React from 'react'

const Card = (item) => {
    const {title,desc,image} = item
    console.log(item);
  return (
    <div className='cards'>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt={title} />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card

