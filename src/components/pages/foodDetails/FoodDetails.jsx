import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

export default function FoodDetails() {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const getFoodDetails = async () => {
    await fetch(`https://free-food-menus-api-production.up.railway.app/best-foods/${id}`)
      .then (response => response.json())
      .then (data => {
        setFood(data);
      }
      );
  };
  getFoodDetails();
  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Food Details</h1>
      <table>
        <tr>
          <th>{food.name}</th>
          <th>{food.dsc}</th>
          <th>{food.price}</th>
          <th>{food.rate}</th>
          <th>{food.country}</th>
        </tr>
      </table>
    </div>
  );
}
