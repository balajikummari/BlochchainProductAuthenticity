import React, { Component } from 'react';
import { Card ,Button, Form} from 'react-bootstrap';
import TopBar from '../../Components/TopBar/TopBar'    //Importing <TopBar/> from Component Folder
import Contract from '../../web3/Contract'            //Importing Contract from Web3 Folder


//Code Responsible For Manufacturer Dasboard
class ManufacturerDashboard extends Component {  
    constructor() {               
        super()
        this.state = {          // The "state" is where you store property values that belongs to this Dashboard
            contract : {},      // More about React State : https://www.w3schools.com/react/react_state.asp
            ProductName : "",
            Description : "",
            BestBefore  : "",
            ManufacturerName : "Amul Milk Products",
            ManufacturedProducts:[],
            isLoading : false
        }
    }
    
    async componentDidMount(){                       // The componentDidMount() is executed  on Page Load. https://www.w3schools.com/react/react_lifecycle.asp
        var _contract = await new Contract()        // Creating a New Contract Instance to use in this dashboard
        await _contract.load()                      // Activating the Connection with The Blockchain Node 
        await this.setState({contract : _contract}) // Storing the Activated Contract in "State"
    }

    async AddProduct() {                                // This Function gets executed on Submit button
        if (this.state.isLoading) {
            var ProductId = String(Date.now())          // Unique Product ID based on current DateTime
            var ManufactureDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');  // Manufacturing Date is set to current date
            await this.state.contract.CreateProduct(    //'CreateProduct(Product parameters)' from Contract Instace 
                ProductId,                              //ProductID set above
                this.state.ProductName,                 // ProductName from "State" set by TextBox in UI
                this.state.Description,                 // Description from "State" set by TextBox in UI
                this.state.ManufacturerName,            // ManufacturerName from "State" set by Deafault above
                ManufactureDate,                        // Manufacture date set above
                this.state.BestBefore                   // BestBefore from "State" set by TextBox in UI
            ).then(() => {                           
              this.setState({isLoading : false})        // After Product is Added to Blockchain
              this.setState(                            // Add ProductId to ManufacturedProducts in "State" to Display in UI
                  {ManufacturedProducts : this.state.ManufacturedProducts.concat(ProductId)})
            })
        }
    }


    render() {                                        // Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp

        const handleChange = async(e) =>{             // handleChange Tracks the UserInput in the UI TextBoxes
            let change = {}
            change[e.target.name] = e.target.value
            this.setState(change)                     // Set the Data Entred in the TextBox to "State" 
           }

        const handleSubmit = async () =>{             // handleSubmit is executed On Hitting the Add Product Button
           await this.setState({isLoading:true})
            this.AddProduct();                        // Calling the AddProduct Function Abovw
       } 
       
        return ( 
        <div className="vh-100 "> 
            <TopBar name = "Manufacturer Dashboard"></TopBar>  
           <div className = "dt  v-mid center pv6 w-50">
                <span className="f2  center">Amul Products Dashboard</span>
                <Card> 
                <Form className="fl w-80 pv3 center">
                        <Form.Group >
                            <Form.Label>Prodcut Name :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe" name="ProductName" onChange = {handleChange.bind(this)} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe 200ml Can"  name="Description" onChange = {handleChange.bind(this)}  required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Best Before :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="3 weeks"  name="BestBefore" onChange = {handleChange.bind(this)} required/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            disabled={this.state.isLoading}
                            onClick={handleSubmit.bind(this) }
                            >
                            {this.state.isLoading ? 'Manufacturing Products & Adding to Blockchain.........' : 'Manufacture Product'}
                            </Button>
                        </Form>
                </Card>
                <span className="f4 underline  center"> Ids of Prodcuts :</span>
                {this.state.ManufacturedProducts.map((id) =>" "+id + ",")}    
           </div>
        </div> 
    );}
}
 
export default ManufacturerDashboard;