import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <p className="card-text">Category: {item.category}</p>
        <p className="card-text">Price: {item.price}</p>
        <p className="card-text">Color: {item.colors}</p>
      </div>
    </div>
  );
};

export default Card;
