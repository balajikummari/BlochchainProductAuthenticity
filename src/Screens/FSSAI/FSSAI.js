import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'

class FSSAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false, 
            ProductId : null,
            ProductDetails : {}
         }
    }

    render() {
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI"></TopBar>
            <div className = " center ml3 mr3 w-60">
            <div className="flex flex-coloum center f2 pb3 w-50"> FSSAI DashBoard</div>
             <ProductInfo />
             </div>
             
            <div className="flex flex-coloum center f3 pb3 w-20"> Complaints  </div>
            <div  className="flex center justify-around w-60 ">
                   <Card className="pv2 ph3 grow">lkdfdlm.g5445</Card> 
                   <Card className="pv2 ph3 grow">lkdfdlm.g5445</Card>
                   <Card className="pv2 ph3 grow">lkdfdlm.g5445</Card>
                   <Card className="pv2 ph3 grow">lkdfdlm.g5445</Card>
            </div>
        </div> 
    );}
}
 
export default FSSAI;