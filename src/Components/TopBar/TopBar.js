import React, { Component } from "react";
import { Navbar, Nav ,Button, Form, FormControl} from 'react-bootstrap';

class TopBar extends Component {

    render() { 
        return (   
        <Navbar bg="primary" className="center " variant="dark">
        <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
          <Button variant="outline-light" href="/" className="mr-sm-2">Logout</Button>
        </Navbar> );
    }
}
 
export default TopBar;