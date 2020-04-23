import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
        <TopBar name = "FSSAI Peoples App"></TopBar>
        Customer
        </div> 
        );
    }
}
 
export default Customer;