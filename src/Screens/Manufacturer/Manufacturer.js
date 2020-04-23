import React, { Component } from 'react';
import TopBar from '../../Components/TopBar/TopBar'
import { Card ,Button, Form, FormControl} from 'react-bootstrap';
import { string } from 'postcss-selector-parser';


class Manufacturer extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            isLoading : false,
            UIDofProduct:[],
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    ApiRequest() {
        console.log("handle SPI")
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    AddProduct() {
        console.log("Add Product")
        if (this.state.isLoading) {
            this.ApiRequest().then(() => {
              this.setState({isLoading : false})
              this.setState({UIDofProduct : this.state.UIDofProduct.concat('UIDAMP154265')})
            })
        }
    }

   async handleClick(){
        console.log("handle click")
        await this.setState({isLoading:true})
        this.AddProduct();
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
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe"  required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="Amul Cool Cafe 200ml Can"  required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Best Before :</Form.Label>
                            <Form.Control className="i f4" type="text" placeholder="3 weeks"  required/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            disabled={this.state.isLoading}
                            onClick={this.handleClick }
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