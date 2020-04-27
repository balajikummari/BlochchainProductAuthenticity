import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Button} from 'react-bootstrap';
import Web3 from 'web3';

class Login extends Component {
    state = {account: ''}

    async loadBlockChain() {

        let RPC_ENDPOINT = "https://e0eregoq5z:FfuCovVsKAtpZwXKR5tey2CTY9gIF4PZZGFYJnLMcBE@e0hjr0v783-e0rwwtnto1-wss.de0-aws.kaleido.io/"; // Remove the leading https://
        
        let provider = new Web3.providers.HttpProvider(RPC_ENDPOINT)
            
            // ,0,
            // {
            //     "Access-Control-Allow-Origin": "http://localhost:3000",
            //     Authorization: 'Basic Authorization: Basic ZTBlcmVnb3E1ejpGZnVDb3ZWc0tBdHBad1hLUjV0ZXkyQ1RZOWdJRjRQWlpHRllKbkxNY0JF'
            // });
        let web3 =  new Web3(provider);
        
        // Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.
        
        web3.eth.getBlock("latest").then((latestBlock) => {
            console.log("Latest Block Via HTTP Provider: ")
            console.log(latestBlock);
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