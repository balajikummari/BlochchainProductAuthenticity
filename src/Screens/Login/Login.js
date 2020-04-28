import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Button} from 'react-bootstrap';
import Contract from '../../web3/Contract'
import Web3 from "web3";

class Login extends Component {
   
   async componentDidMount(){
       var _contract = await new Contract()
       await _contract.load()
    }
     
    render() { 
        return (
            <div className="vh-100 ">
                    <TopBar name = "FSSAI LOGIN"></TopBar>
                    <div className = "dt tc v-mid center pv6 w-30">
                    <div className="dtc ">
                        <span><h2 class="w-100 pv1 mb4">Select a DashBoard </h2></span>
                        <div class="grow  mb4" ><Button href="/Manufacturer" size="lg" block> Manufacturer  </Button></div>
                        <div class="grow  mb4" ><Button href="/Retailer" size="lg" block> Retailer  </Button></div>
                        <div class="grow  mb4" ><Button href="/Customer" size="lg" block> Customer  </Button></div>
                        <div class="grow  mb4" ><Button href="/Fssai" size="lg" block> FSSAI </Button></div>
                    </div>
                    </div>
            </div>
          );
    }
}
 
export default Login;