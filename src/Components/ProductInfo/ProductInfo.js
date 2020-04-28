
import React, { Component } from "react";
import { Card ,Button, Form} from 'react-bootstrap';
import Contract from '../../web3/Contract'

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contract : null,
            isLoading : false, 
            ProductId : null,
            ProductDetails : {}
         }
    }
    async componentDidMount(){
        var _contract = await new Contract()
        await _contract.load()
        await this.setState({contract : _contract})
        
    }
    

  async CheckProduct() { 
        const Product = await this.state.contract.GetProductInfo(this.state.ProductId)
       await this.setState({ProductDetails :
            {ManufacturerName : Product.ManufacturerName,
             ProductName : Product.ProductName,
             Description : Product.Description,
             ManufacturedDate :Product.ManufactureDate,
             BestBefore : Product.Bestbefore,
             Retailername : Product.RetailerName,
             }})
        await this.setState({isLoading : false})     
    }

  async handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
     this.setState(change)
    this.props.getId(e.target.value)
   }

   async handleCheckId(){
    await this.setState({isLoading:true})
    this.CheckProduct();
} 
    render() { 
        return (   
            <div>
                <Card > 
                    <Form className="w-70 pv3 center">
                        <div className="fl w-50">
                                <Form.Control className="i f4" type="text" placeholder="Product ID" name="ProductId" onChange = {this.handleChange.bind(this)} required/>
                        </div>
                        <div className ="fl pl3 pt4 v-btm vh-20  w-30 ">
                            <Button variant="primary" disabled={this.state.isLoading} onClick={this.handleCheckId.bind(this)} block>
                                 {this.state.isLoading ? 'Getting Data from Blockchain....' : 'Check Product'}
                            </Button>
                        </div>
                    </Form>
                </Card>
                <Card className="f4 mt3 ph6 w-100 pv3 center">
                        <span>ManufacturerName : {this.state.ProductDetails.ManufacturerName || ""}</span>
                        <span>ProductName : {this.state.ProductDetails.ProductName || ""}  </span>
                        <span>Description : {this.state.ProductDetails.Description || "" }</span>
                        <span>ManufacturedDate : {this.state.ProductDetails.ManufacturedDate || ""} </span>
                        <span>BestBefore : {this.state.ProductDetails.BestBefore || ""} </span>
                        <span>Retailer   : {this.state.ProductDetails.Retailername || ""} </span>
                 </Card>
            </div>
       
        )}
}
 
export default ProductInfo;