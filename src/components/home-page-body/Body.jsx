import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NoFoodFound from '../pages/NoFoodFound';
import Loading from '../pages/Loading';
import Header from '../home-page-header/Header';
import Card from '../card/Card';
import './Body.css';

export default function Body() {
  const [foods, setFoods] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  
  const fetchData = async () => {
    await fetch('https://free-food-menus-api-production.up.railway.app/best-foods?_limit=32')
      .then (response => response.json())
      .then (data => {
        setData(data);
        setFoods(data);
      }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/food-details/${id}`);
  };

  function foodChangeHandler(searchFoods, searchInput){
    setFoods(searchFoods);
    setSearch(searchInput);
  }

  return (
    <div>
      <Header foodChangeHandler={foodChangeHandler} data={data} />
      <div>
        {(foods.length === 0 && search==='')? 
          (<Loading />) : 
          (foods.length === 0 && search!==''?
            (<NoFoodFound />) :
            (
              <div className="home">
                {foods.map ((food) => (
                  <Card
                    key={food.id}
                    id={food.id}
                    image={food.img}
                    name={food.name}
                    description={food.dsc}
                    price={food.price}
                    rating={food.rate}
                    country={food.country}
                    clickHandler={clickHandler}
                  />
                ))}
              </div>
            )
          )
        }
      </div>
    </div>
  );
}
