import React from 'react';
import {Link} from 'react-router-dom';

function CarCard({car}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{car.model}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Year</dt>
          <dd>{car.year}</dd>
          <dt>Make</dt>
          <dd>{car.make}</dd>
          <dt>Color</dt>
          <dd>{car.color}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/cars'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default CarCard;