import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import TopBar from '../../Components/TopBar/TopBar'                           //Importing <TopBar/> from Component Folder
import ProductInfo from '../../Components/ProductInfo/ProductInfo'           //Importing <ProductInfo/> from Component Folder
import Contract from '../../web3/Contract'                  //Importing Contract from Web3 Folder


class FSSAI extends Component {
    constructor(props) {                                     // The "state" is where you store property values that belongs to this Dashboard
        super(props);                                        // More about React State : https://www.w3schools.com/react/react_state.asp
        this.state = {
            isLoading : false, 
            ProductId : "",
            ProductDetails : {},
            contract :null,
            Complaints : {},
         }
    }

    async componentDidMount(){                      // The componentDidMount() is executed  on Page Load. https://www.w3schools.com/react/react_lifecycle.asp
        var _contract = await new Contract()        // Creating a New Contract Instance to use in this dashboard
        await _contract.load()                      // Activating the Connection with The Blockchain Node 
        await this.setState({contract : _contract}) // Storing the Activated Contract in "State"
    }

    
    async loadComplaints(ProductId){                
      var complaints = await this.state.contract     // Calling The GetComplaints() method in the contract
                                 .GetComplaints(ProductId)
       await this.setState({ Complaints : complaints})
    }

  async  OpenComplaints(ProductId){                   //OpenComplaints(ProductId) Is executed on Searching productId in UI
        this.setState({ProductId : ProductId})
        await this.loadComplaints(ProductId)
    }
    render() {                                      // render() Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI"></TopBar>
            <div className = " center ml3 mr3 w-60">
            <div className="flex flex-coloum center f2 pb3 w-50"> FSSAI DashBoard</div>
             <ProductInfo getId = {this.OpenComplaints.bind(this)} />
             </div>
             
            <div className="flex flex-coloum center f3 pb3 w-20"> Complaints  </div>
            <div  className="flex center justify-around w-60 ">
                   <Card className="pv2 ph3 grow"> {this.state.Complaints.Complaint} </Card> 
            </div>
        </div> 
    );}
}
 
export default FSSAI;