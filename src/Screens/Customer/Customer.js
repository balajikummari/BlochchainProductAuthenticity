import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false, 
            ProductId : null,
            ProductDetails : {}
         }
    }
    
    ApiRequest() { 
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    AddProductToShelf() {
        if (this.state.isLoading) {
            this.ApiRequest().then(() => {
              this.setState({isLoading : false})
            })
    }}

    ReturnProducts() {
        if (this.state.isLoading) {
            this.ApiRequest().then(() => {
              this.setState({isLoading : false})
            })
    }}

   async handleAddProductToShelf(){
    await this.setState({isLoading:true})
    this.AddProductToShelf();
   } 

   async handleReturnProduct(){
    await this.setState({isLoading:true})
    this.ReturnProducts();
   } 

    render() {
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI People's App"></TopBar>
           <div className = "flex flex-column center vh-75 justify-center w-60">
                <div className="center f2 pb3 w-60"> Check Products Before Buying </div>
                 <ProductInfo  />
                <Card className=" fl f4 mv3  w-100 pv3 ph5 ">
                 <div className="flex justify-around" >
                            <div  className="" >
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.handleAddProductToShelf.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Add to Basket'}
                                </Button>
                            </div>
                            <div  className="">
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.handleReturnProduct.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Raise a Complaint'}
                                </Button>
                            </div>
                 </div>
                </Card>
           </div>
        </div> 
    );}
}
 
export default Customer;