import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import RaiseComplaint from '../../Components/RaiseComplaint/RaiseComplaint';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false, 
            ProductId : null,
            ProductDetails : {},
            RenderComplaintBox : []
         }
    }
    
    ApiRequest() { 
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

   async HandleAddtobasket(){
    
   } 

   async HandleRaiseComplaint(){
    await this.setState({raiseComplaint:true})
     this.setState({RenderComplaintBox : [].concat(<RaiseComplaint ProductId = {this.state.ProductId} />)})
   } 

    render() {
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI People's App"></TopBar>
           <div className = "flex flex-column center vh-75 justify-center w-60">
                <div className="center f2 pb3 w-60"> Check Products Before Buying </div>
                 <ProductInfo getId = {function(ProductId){this.setState({ProductId : ProductId})}.bind(this)} />
                <Card className=" fl f4 mv3  w-100 pv3 ph5 ">
                 <div className="flex justify-around" >
                            <div  className="" >
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.HandleAddtobasket.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Add to Basket'}
                                </Button>
                            </div>
                            <div  className="">
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.HandleRaiseComplaint.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Raise a Complaint'}
                                </Button>
                            </div>
                 </div>
                </Card>
                {this.state.RenderComplaintBox}
           </div>
        </div> 
    );}
}
 
export default Customer;