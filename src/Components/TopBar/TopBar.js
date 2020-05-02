import React, { Component } from "react";
import { Navbar ,Button} from 'react-bootstrap';

// Responsible For Displaying the Header With Name and  Logout Button
class TopBar extends Component {
    render() { 
        return (   
        <Navbar bg="primary" className="w-100  flex justify-between" variant="dark">
          <Navbar.Brand href="/"><span className="f3">{this.props.name}</span></Navbar.Brand>
          <Button variant="danger" href="/" className="mr-sm-2 grow">Logout</Button>
        </Navbar> );
    }
}
 
export default TopBar;