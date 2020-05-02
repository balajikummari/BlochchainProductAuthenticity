import React, { Component } from 'react';
import { Card ,Button} from 'react-bootstrap';
import TopBar from '../../Components/TopBar/TopBar'                           //Importing <TopBar/> from Component Folder
import ProductInfo from '../../Components/ProductInfo/ProductInfo'           //Importing <ProductInfo/> from Component Folder
import Contract from '../../web3/Contract'                  //Importing Contract from Web3 Folder

//Code Responsible For Retailer Dasboard
class RetailerDashboard extends Component {
    constructor() {
        super();
        this.state = {                    // The "state" is where you store property values that belongs to this Dashboard
            contract : {},              // More about React State : https://www.w3schools.com/react/react_state.asp
            isLoading : false, 
            ProductId : "",
         }
    } 
    
    async componentDidMount(){                      // The componentDidMount() is executed  on Page Load. https://www.w3schools.com/react/react_lifecycle.asp
        var _contract = await new Contract()        // Creating a New Contract Instance to use in this dashboard
        await _contract.load()                      // Activating the Connection with The Blockchain Node 
        await this.setState({contract : _contract}) // Storing the Activated Contract in "State"
    }

   async AddProductToShelf(){                       // AddProductToShelf() is executed on Add Product Button press in UI
        await this.setState({isLoading:true})         
        var RetailerName = "Relience Mart"              
        await this.state.contract                       // Calling The AddProductToShelf() method in the contract
                        .AddProductToShelf(String(this.state.ProductId), RetailerName)
        await this.setState({isLoading : false})
   } 

   async ReturnProduct(){                            // ReturnProduct() is executed on Return Product Button press in UI
        window.alert("Product Returend");
   } 

    render() {                                       // render() Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp
        const getId =(ProductId)=>{                  //  Gets the Product ID from UI TextBox
            this.setState({ProductId : ProductId})
        }
        return ( 
        <div className="vh-100 ">
            <TopBar name = "Retailer Dashboard"></TopBar>
           <div className = "flex flex-column center vh-75 justify-center w-60">
                <div className="center f2 pb3 w-60"> Relience Mart Dashboard</div>
                 <ProductInfo getId = {getId.bind(this)} />
                <Card className=" fl f4 mv3  w-100 pv3 ph5 ">
                 <div className="flex justify-around" >
                            <div>
                                <Button variant="primary"  disabled={this.state.isLoading} onClick={this.AddProductToShelf.bind(this)}>
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Add Product to Shelf'}
                                </Button>
                            </div>
                            <div >
                                <Button variant="primary" disabled={this.state.isLoading} onClick={this.ReturnProduct.bind(this)} >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Return Product'}
                                </Button>
                            </div>
                 </div>
                </Card>
           </div>
        </div> 
    );}
}
 
export default RetailerDashboard;