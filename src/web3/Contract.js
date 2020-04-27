import getWeb3 from "./getWeb3";
import FssaiContract from '../contracts/FSSAI.json'
import React, { Component } from 'react';

class Contract {
   accounts;
   contract ;
   FSSAI ;
   Complaint ;
   ProductID ; 
  constructor() {
    
    this.load()
  }

  load = async () => {
    try {
      const web3 = await getWeb3();

       this.accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();

      const FssaiNetwork =  FssaiContract.networks[networkId];

      this.FSSAI = new web3.eth.Contract(
        FssaiContract.abi,
        FssaiNetwork && FssaiNetwork.address,
      );
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

 runExample = async () => {
    const complaint = await this.FSSAI.methods.Complaints("id1").call();
    console.log( "complaint from bc" + complaint.ProductID)
    return complaint.ProductID
  };

}
 
export default Contract ;