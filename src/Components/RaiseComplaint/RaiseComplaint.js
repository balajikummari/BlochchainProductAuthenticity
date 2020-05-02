import React, { Component } from 'react';
import { Card ,Button, Form} from 'react-bootstrap';


// Responsible For Displaying the Raise Complaint Option In Customer Dashboard
class RaiseComplaint extends Component {
    constructor(props) {   // Props are Data/Functions passed into from one components to another. know more : https://www.w3schools.com/react/react_props.asp
        super(props);        // The "state" is where you store property values that belongs to this Dashboard
        this.state = {      // More about React State : https://www.w3schools.com/react/react_state.asp
            complaint : null,
            isLoading : false,
         }         
    }

  async handleChange(e){              // Handles the Changes in the UI TextBox
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
   }

   async handleSubmit(e){             // Calling the SendComplaint Function in Parent Component ie .. CustomerDashboard
       e.preventDefault()
    this.props.sendComplaint(this.state.complaint)
   }

    render() {                      // render() Displays the HTML in the UI https://www.w3schools.com/react/react_render.asp
        return (                     //  Gets the Product ID from UI TextBox
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