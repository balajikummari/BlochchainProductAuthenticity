import React, { Component } from "react";
import { Card ,Button, Form} from 'react-bootstrap';
import Contract from '../../web3/Contract'   //Importing Contract from Web3 Folder

// Responsible For Displaying Product Info in Retailer,Customer, FSSAI DashBoards
class ProductInfo extends Component {
    
    constructor(props) {                    // Props are Data passed into from one components to another. know more : https://www.w3schools.com/react/react_props.asp
        super(props);
        this.state = {                      // The "state" is where you store property values that belongs to this Dashboard
            contract : {},
            isLoading : false, 
            ProductId : "",
            ProductDetails : {}
         }
    }

    async componentDidMount(){                      // The componentDidMount() is executed  on Page Load. https://www.w3schools.com/react/react_lifecycle.asp
        var _contract = await new Contract()        // Creating a New Contract Instance to use in this dashboard
        await _contract.load()                      // Activating the Connection with The Blockchain Node 
        await this.setState({contract : _contract}) // Storing the Activated Contract in "State"
    }

    async CheckProductId(){                         // CheckProductId() is executed on Check Product Button press in UI
        await this.setState({isLoading:true})
        const Product = await this.state.contract   // Calling The GetProductInfo() method in the contract    
                                    .GetProductInfo(this.state.ProductId)
        await this.setState({ProductDetails :       //Adding the Reponse Product Data To "State" to display in UI
             {ManufacturerName : Product.ManufacturerName,
              ProductName : Product.ProductName,
              Description : Product.Description,
              ManufacturedDate :Product.ManufactureDate,
              BestBefore : Product.Bestbefore,
              Retailername : Product.RetailerName,
              }})
         await this.setState({isLoading : false})
    } 

  async handleChange(e){                           // handles the Data Changes in the UI
    let change = {}
    change[e.target.name] = e.target.value
     this.setState(change)
    this.props.getId(e.target.value)
   }

    render() {                                      // render() Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp
        return (                                    //  Gets the Product ID from UI TextBox
            <div>
                <Card > 
                    <Form className="w-70 pv3 center">
                        <div className="fl w-50">
                                <Form.Control className="i f4" type="text" placeholder="Product ID" name="ProductId" onChange = {this.handleChange.bind(this)} required/>
                        </div>
                        <div className ="fl pl3 pt4 v-btm vh-20  w-30 ">
                            <Button variant="primary" disabled={this.state.isLoading} onClick={this.CheckProductId.bind(this)} block>
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