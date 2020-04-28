import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import RaiseComplaint from '../../Components/RaiseComplaint/RaiseComplaint';
import Contract from '../../web3/Contract'
class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contract :null,
            isLoading : false, 
            ProductId : null,
            ProductDetails : {},
            complaint:null,
            RenderComplaintBox : []
         }
    }
    
    async componentDidMount(){
        var _contract = await new Contract()
        await _contract.load()
        await this.setState({contract : _contract})
    }

   async HandleAddtobasket(){
    
   } 

   async HandleRaiseComplaint(){
    await this.setState({raiseComplaint:true})
     this.setState({RenderComplaintBox : [].concat(<RaiseComplaint sendComplaint = {this.getComplaintContent.bind(this)} key = {this.state.ProductId} ProductId = {this.state.ProductId} />)})
   } 

  async getComplaintContent(complaint){
       await this.setState({complaint : complaint})
       await this.RaiseComplaint()
   }

   
   async RaiseComplaint() {
          await this.state.contract.CreateComplaint(String(this.state.ProductId) ,String(this.state.complaint))
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