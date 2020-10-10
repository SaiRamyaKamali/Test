
import { Navbar, NavbarBrand } from 'reactstrap';
import React, {Component} from 'react';
import Login from './Components/LoginComponent';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">FlipCart</NavbarBrand>
          </div>
        </Navbar>
        <Login></Login>
      </div>
      
    );
  }
}

export default App;
