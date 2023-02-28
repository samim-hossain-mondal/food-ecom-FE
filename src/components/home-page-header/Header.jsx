/* eslint-disable react/prop-types */
import React from 'react';
import proptypes from 'prop-types';
import './Header.css';
import Search from '../utils/search/Search';

export default function Header({data, foodChangeHandler}) {
  return (
    <div className="body-header">
      <Search data={data} foodChangeHandler={foodChangeHandler}/>
    </div>
  );
}

Header.propTypes = {
  foods: proptypes.shape({
    id: proptypes.number,
    name: proptypes.string,
    dsc: proptypes.string,
    img: proptypes.string,
    price: proptypes.number,
    rate: proptypes.number,
    country: proptypes.string,
  }),
};