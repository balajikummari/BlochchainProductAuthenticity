import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Button} from 'react-bootstrap';
import Web3 from 'web3';

class Login extends Component {
    state = {account: ''}

    async loadBlockChain() {
        const Web3 = require('web3');

        let USER = "u1g3mfl806";
        let PASS = "EjOXSRsvhXPqfCkYdZqEXBPvGaQ4Nj4xYWt0W6ufBvk";
        let RPC_ENDPOINT = "u1ls3q82nb-u1rfqokt6v-rpc.us1-azure.kaleido.io"; // Remove the leading https://
        
        let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;
        
        let provider = new Web3.providers.HttpProvider(nodeUrl);
        let web3 = new Web3(provider);
        
        // Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.
        
        web3.eth.getBlock("latest").then((latestBlock) => {
            console.log("Latest Block Via HTTP Provider: ")
            console.log(latestBlock);
            // Stop the program once this has finished
            process.exit();
        });
      }

    componentDidMount(){
        this.loadBlockChain()
    }

    render() { 
        return (
            <div className="vh-100 ">
                    <TopBar name = "FSSAI LOGIN"></TopBar>
                    <div className = "dt tc v-mid center pv6 w-30">
                    <div className="dtc ">
                        <p>Your account: {this.state.account}</p>   
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