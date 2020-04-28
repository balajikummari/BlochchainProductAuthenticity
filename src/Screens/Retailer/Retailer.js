import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import Contract from '../../web3/Contract'

class Retailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contract : null,
            isLoading : false, 
            ProductId : null,
         }
    }
    
    async componentDidMount(){
        var _contract = await new Contract()
        await _contract.load()
        await this.setState({contract : _contract})
    }
    
   async AddProductToShelf()  { 
        var RetailerName = "Relience Mart"
        await this.state.contract.AddProductToShelf(String(this.state.ProductId), RetailerName)
        await this.setState({isLoading : false})
    }

    ReturnProducts() {
        if (this.state.isLoading) {
              this.setState({isLoading : false})
            }
    }

   async handleAddProductToShelf(){
    await this.setState({isLoading:true})
    this.AddProductToShelf();
   } 

   async handleReturnProduct(){
    await this.setState({isLoading:true})
    this.ReturnProducts();
   } 

   getId(ProductId){
       this.setState({ProductId : ProductId})
   }

    render() {
        return ( 
        <div className="vh-100 ">
            <TopBar name = "Store Management"></TopBar>
           <div className = "flex flex-column center vh-75 justify-center w-60">
                <div className="center f2 pb3 w-60"> Relience Mart Dashboard</div>
                 <ProductInfo getId = {this.getId.bind(this)} />
                <Card className=" fl f4 mv3  w-100 pv3 ph5 ">
                 <div className="flex justify-around" >
                            <div  className="" >
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.handleAddProductToShelf.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Add Product to Shelf'}
                                </Button>
                            </div>
                            <div  className="">
                                <Button
                                    variant="primary"
                                    disabled={this.state.isLoading}
                                    onClick={this.handleReturnProduct.bind(this)}
                                    >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Return Product'}
                                </Button>
                            </div>
                 </div>
                </Card>
           </div>
        </div> 
    );}
}
 
export default Retailer;