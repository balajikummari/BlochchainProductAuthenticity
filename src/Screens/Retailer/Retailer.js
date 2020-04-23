import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'


class Retailer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
         <TopBar name = "Store Management DashBoard"></TopBar>
        Retailer
        </div> 
        );
    }
}
 
export default Retailer;