import React from 'react';

export default function NoFoodFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column' , textAlign: 'center'}}>
      <p><h1>Oops... No food found with this name</h1></p> 
      <h2>Try again !</h2>
    </div >
  );
}