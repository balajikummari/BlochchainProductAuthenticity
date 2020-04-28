import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import Contract from '../../web3/Contract'


class FSSAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false, 
            ProductId : null,
            ProductDetails : {},
            contract :null,
            Complaints : {},
         }
    }

    async componentDidMount(){
        var _contract = await new Contract()
        await _contract.load()
        await this.setState({contract : _contract})
    }
    
    async loadComplaints(ProductId){
      var complaints = await this.state.contract.GetComplaints(ProductId)
       await this.setState({ Complaints : complaints})
    }

  async  getId(ProductId){
        this.setState({ProductId : ProductId})
        await this.loadComplaints(ProductId)
    }
    render() {
        return ( 
        <div className="vh-100 ">
            <TopBar name = "FSSAI"></TopBar>
            <div className = " center ml3 mr3 w-60">
            <div className="flex flex-coloum center f2 pb3 w-50"> FSSAI DashBoard</div>
             <ProductInfo getId = {this.getId.bind(this)} />
             </div>
             
            <div className="flex flex-coloum center f3 pb3 w-20"> Complaints  </div>
            <div  className="flex center justify-around w-60 ">
                   <Card className="pv2 ph3 grow"> {this.state.Complaints.Complaint} </Card> 
            </div>
        </div> 
    );}
}
 
export default FSSAI;