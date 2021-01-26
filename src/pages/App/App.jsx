import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as itemAPI from '../../utilities/items-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AddCarPage from '../../components/AddCarPage/AddCarPage';
import CarList from '../../components/CarList/CarList';
import CarDetailPage from '../../pages/CarDetailPage/CarDetailpage';
import EditCarPage from '../../pages/EditCar/EditCarPage'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cars, setCars] = useState([]);

  async function handleAddCar(formData) {
    const newCar = await itemAPI.create(formData);
    setCars([...cars, newCar])
  }

  async function handleUpdateCar(updatedCarData) {
    const updatedCar = await itemAPI.update(updatedCarData);
    const newCarsArray = cars.map(car =>
      car._id === updatedCar._id ? updatedCar : car
    );
    setCars(newCarsArray)
  }

  async function handleDeleteCar(id){
    console.log(id);
    await itemAPI.deleteOne(id);
    setCars(cars.filter(c => c._id !== id))
  }  

  useEffect(() => {
    async function getCars() {
      const cars = await itemAPI.getAll();
      setCars(cars);
    }
    getCars();
  }, []);

  const history = useHistory();
  useEffect(() => {
    history.push("/cars")
  }, [cars, history])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Route exact path="/cars">
              <CarList cars={cars} handleDeleteCar={handleDeleteCar}/>
            </Route>
            <Route exact path="/cars/new" render={() =>
              <AddCarPage
                setCars={setCars} handleAddCar={handleAddCar}
              />
            } />
            <Route
              exact
              path="/details"
              render={() => <CarDetailPage />}
            />
            <Route exact path='/edit'>
              <EditCarPage
                handleUpdateCar={handleUpdateCar}
              />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
