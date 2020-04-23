import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form} from 'react-bootstrap';


class Manufacturer extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            isLoading : false,
            UIDofProduct:[],
            ProductName : null,
            Description : null,
            BestBefore  : null
        }
    }
    
    ApiRequest() { 
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    AddProduct() {
        if (this.state.isLoading) {
            this.ApiRequest().then(() => {
              this.setState({isLoading : false})
              this.setState({UIDofProduct : this.state.UIDofProduct.concat('UIDAMP154265')})
            })
        }
    }

   async handleSubmit(){
        console.log("handle click")
       await this.setState({isLoading:true})
        this.AddProduct();
   } 
   async handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
   }

    render() { 
        return ( 
        <div className="vh-100 ">
            <TopBar name = "Manufacturer Control Station"></TopBar>
           <div className = "dt  v-mid center pv6 w-50">
                <span className="f2  center">Amul Products Dashboard</span>
                <Card> 
                <Form className="fl w-80 pv3 center">
                        <Form.Group >
                            <Form.Label>Prodcut Name :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe" name="ProductName" onChange = {this.handleChange.bind(this)} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe 200ml Can"  name="Description" onChange = {this.handleChange.bind(this)}  required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Best Before :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="3 weeks"  name="BestBefore" onChange = {this.handleChange.bind(this)} required/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            disabled={this.state.isLoading}
                            onClick={this.handleSubmit.bind(this) }
                            >
                            {this.state.isLoading ? 'Manufacturing Products & Adding to Blockchain.........' : 'Manufacture Product'}
                            </Button>
                        </Form>
                </Card>
                <span className="f4 underline  center"> Ids of Prodcuts :</span>
                {this.state.UIDofProduct.map((id) =>" "+id + ",")}
              
               
           </div>
        </div> 
    );}
}
 
export default Manufacturer;