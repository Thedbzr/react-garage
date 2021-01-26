import './CarListItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function CarListItem({ car, handleDeleteCar }){
    return (
        <div className='panel panel-default'>
          <div className="panel-heading">
            <h3 className='panel-title'>{car.model}</h3>
          </div>
          <div className='panel-footer PuppyListItem-action-panel'>
            <Link
              className='btn btn-xs btn-info'
              to={{
                pathname: '/details',
                state: { car }
              }}
            >
              DETAILS
            </Link>
            <Link
              className='btn btn-xs btn-warning'
              to={{
                pathname: '/edit',
                state: { car }
              }}
            >
              EDIT
            </Link>
            <button
              className='btn btn-xs btn-danger margin-left-10'
              onClick={() => handleDeleteCar(car._id)}
            >
              DELETE
    </button>
          </div>
        </div>
      );
}