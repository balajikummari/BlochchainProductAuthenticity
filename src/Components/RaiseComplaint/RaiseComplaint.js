import React, { Component } from 'react';
import { Card ,Button, Form} from 'react-bootstrap';
import Contract from '../../web3/Contract'

class RaiseComplaint extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            complaint : null,
            isLoading : false,
         }         
    }

  async handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
   }

   async handleSubmit(e){
       e.preventDefault()
    this.props.sendComplaint(this.state.complaint)
   }

    render() { 
        return (
            <Card > 
            <Form className="w-70 pv3 center">
                <div >
                    <span>Prodict ID : {this.props.ProductId}</span>
                </div>
                <div class="form-group">
                    <textarea class="form-control" onChange = {this.handleChange.bind(this)} name = "complaint" placeholder="Write your complaint here" rows="2" ></textarea>
                </div>
                <div className ="pl3  ">
                    <Button variant="primary" disabled={this.state.isLoading} onClick={this.handleSubmit.bind(this)} block>
                         {this.state.isLoading ? 'Adding complaint to blockchain' : 'Submit'}
                    </Button>
                </div>
            </Form>
        </Card>
          );
    }
}
 
export default RaiseComplaint;