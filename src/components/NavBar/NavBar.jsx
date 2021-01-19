import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders">Order History</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders/new">New Order</NavLink>
    </nav>
  );
}