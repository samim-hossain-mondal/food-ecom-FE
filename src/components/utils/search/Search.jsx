/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import proptypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import './Search.css';

export default function Search({ foodChangeHandler, data}) {
  const [search, setSearch] = useState('');
  const searchHandler = (e) => {
    let searchInput = e.target.value;
    e.preventDefault();
    setSearch(e.target.value);
    if(e.target.value === ''){
      foodChangeHandler(data);
      return;
    }
    let searchFoods = data.filter((food) => food.name.toLowerCase().includes(search.toLowerCase().trim()));
    foodChangeHandler(searchFoods, searchInput);
  };
  return (
    <div className="search">
      <input value={search} placeholder="Search..." onChange={searchHandler} />
      <button onClick={searchHandler}> <BsSearch className="search-icon" size='20' /> </button>
    </div>
  );
}

Search.propTypes = {
  submitHandler: proptypes.func,
  searchHandler: proptypes.func,
  search: proptypes.string,
  filter: proptypes.func,
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


