import React, { Component } from 'react';
import { Card ,Button, Form} from 'react-bootstrap';
import TopBar from '../../Components/TopBar/TopBar'                           //Importing <TopBar/> from Component Folder
import ProductInfo from '../../Components/ProductInfo/ProductInfo'           //Importing <ProductInfo/> from Component Folder
import RaiseComplaint from '../../Components/RaiseComplaint/RaiseComplaint'; //Importing <RaiseComplaint/> from Component Folder
import Contract from '../../web3/Contract'                                   //Importing Contract() from Web3 Folder
class Customer extends Component {

    constructor(props) {                    // The "state" is where you store property values that belongs to this Dashboard
        super(props);                       // More about React State : https://www.w3schools.com/react/react_state.asp
        this.state = {
            contract :null,
            isLoading : false, 
            ProductId : null,
            ProductDetails : {},
            complaint:null,
            RenderComplaintBox : []
         }
    }
    
    async componentDidMount(){                      // The componentDidMount() is executed  on Page Load. https://www.w3schools.com/react/react_lifecycle.asp
        var _contract = await new Contract()        // Creating a New Contract Instance to use in this dashboard
        await _contract.load()                      // Activating the Connection with The Blockchain Node 
        await this.setState({contract : _contract}) // Storing the Activated Contract in "State"
    }

   async HandleAddtobasket(){                       // AddProductToShelf() is executed on Add to Basket Button press in UI
        window.alert("Added to Basket")
   } 

   async ShowComplaintBox(){                            // ShowComplaintBox() is executed on Raise Complaint Button press in UI
        await this.setState({raiseComplaint:true})
        this.setState({RenderComplaintBox : [].concat(  // Display The  <RaiseComplaint /> Component
        <RaiseComplaint sendComplaint = {this.SendComplaint.bind(this)} ProductId = {this.state.ProductId} />)})
   } 

  async SendComplaint(complaint){
       await this.setState({complaint : complaint})   
       await this.state.contract                        // Calling The CreateComplaint() method in the contract
                        .CreateComplaint(String(this.state.ProductId) ,String(this.state.complaint))
   }


    render() {                                          // render() Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI People's App"></TopBar>
           <div className = "flex flex-column center vh-75 justify-center w-60">
                <div className="center f2 pb3 w-60"> Check Products Before Buying </div>
                 <ProductInfo getId = {function(ProductId){this.setState({ProductId : ProductId})}.bind(this)} />
                <Card className=" fl f4 mv3  w-100 pv3 ph5 ">
                 <div className="flex justify-around" >
                            <div  className="" >
                                <Button variant="primary" disabled={this.state.isLoading} onClick={this.HandleAddtobasket.bind(this)}  >
                                    {this.state.isLoading ? 'Updating Blockchain....' : 'Add to Basket'}
                                </Button>
                            </div>
                            <div  className="">
                                <Button variant="primary" disabled={this.state.isLoading} onClick={this.ShowComplaintBox.bind(this)}  >
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