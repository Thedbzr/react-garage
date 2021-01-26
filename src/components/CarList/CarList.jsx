import './CarList.css';
import CarListItem from '../CarListItem/CarListItem';

export default function CarList(props) {
    const carComponents = props.cars.map(car =>
        <CarListItem
            key={car._id}
            car={car}
            handleDeleteCar={props.handleDeleteCar}
        />
    );
    return (
        <main className="CarList">
            {carComponents}
        </ main>
    )
}