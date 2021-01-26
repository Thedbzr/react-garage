import React from 'react';
import CarCard from "../../components/CarCard/CarCard";
import { useLocation } from 'react-router-dom';

function CarDetailPage(props) {
  
  const {state : {car} } = useLocation()
  // const puppy = useLocation().state.puppy

  return (
    <>
      <h1>Car Details</h1>
      <CarCard 
        car={car}
        key={car._id}
      />
    </>
  );
}

export default CarDetailPage;