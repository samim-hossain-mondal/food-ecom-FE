import React from 'react';
import proptypes from 'prop-types';
import './Card.css';

export default function Card({id, image, name, description, price, rating, country, clickHandler}) {
  
  return (
    <div onClick={() => clickHandler(id)}
      className="card-border">
      <div className="card-main">
        <div className="card-img">
          <img src={image} alt="food-img" />
        </div>
        <div className="card-content">
          <a className="title"><b>{name}</b></a>
          <a className="description">{description}</a>
        </div>
        <div className="details">
          <span className="rate">{rating}</span>
          <span className="price">${price}</span>
          <span className="country">{country}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: proptypes.number.isRequired,
  image: proptypes.string.isRequired,
  name: proptypes.string.isRequired,
  description: proptypes.string.isRequired,
  price: proptypes.number.isRequired,
  rating: proptypes.number.isRequired,
  country: proptypes.string.isRequired,
  clickHandler: proptypes.func.isRequired,
};


