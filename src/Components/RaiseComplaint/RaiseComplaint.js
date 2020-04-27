import React, { Component } from 'react';
import { Card ,Button, Form} from 'react-bootstrap';

class RaiseComplaint extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading : false
         }
    }
    
     
    ApiRequest() { 
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    RaiseComplaint() {
        if (this.state.isLoading) {
            this.ApiRequest().then(() => {
              this.setState({isLoading : false})
            })
    }}

  async handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
   }

   async handleSubmit(e){
    await this.setState({isLoading:true})
    this.RaiseComplaint()

   }

    render() { 
        return (
            <Card > 
            <Form className="w-70 pv3 center">
                <div >
                    <span>Prodict ID : {this.props.ProductId}</span>
                </div>
                <div class="form-group">
                    <textarea class="form-control" name = "complaint" placeholder="Write your complaint here" rows="2" ></textarea>
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