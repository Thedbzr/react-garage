import { NavLink , Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

  function handleLogOut(){
    userService.logOut();
    setUser(null);
  }

  function handleLogin(){
    userService.login();
    setUser(user);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/cars">View Cars</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/cars/new">Add Cars</NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogin}>LogIn</Link>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}