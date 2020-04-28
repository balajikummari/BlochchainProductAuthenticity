import getWeb3 from "./getWeb3";
import FssaiContract from '../contracts/FSSAI.json'
import React, { Component } from 'react';

class Contract {
   accounts;
   contract ;
   FSSAI ;
   Complaint ;
   ProductID ; 

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

 GetProductInfo = async (ProductID) => {
    const Product = await this.FSSAI.methods.Products(ProductID).call();
    return Product
  };

  CreateProduct = async (ProductID, ProductName, Description, ManufacturerName,ManufactureDate,BestBefore ) => {
    await this.FSSAI.methods.CreateProduct(ProductID, ProductName,        
                            Description,ManufacturerName, 
                            ManufactureDate,BestBefore).send({ from: this.accounts[0] });
  }

  AddProductToShelf = async (ProductID, RetailerName) => {
    await this.FSSAI.methods.AddProductToShelf(ProductID, RetailerName).send({ from: this.accounts[0] });
  }

  CreateComplaint = async (ProductID, complaint) => {
    await this.FSSAI.methods.CreateComplaint(ProductID, complaint).send({ from: this.accounts[0] });
  }

  GetComplaints = async(id) =>{
    const Complaints = await this.FSSAI.methods.Complaints(id).call();
    return Complaints
  }
}
 
export default Contract ;