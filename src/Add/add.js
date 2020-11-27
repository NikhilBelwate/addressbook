import React from 'react';
import Address from '../common/Address';
import { Button, Navbar, Nav, NavItem, NavDropdown, Form, FormControl } from 'react-bootstrap';
class  Add extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstNameTxt:'',
      lastNameTxt:'',
      emaiTxt:'',
      phoneTxt:''
    }
    this.firatNameHandle=this.firatNameHandle.bind(this);
    this.lastNameHandle=this.lastNameHandle.bind(this);
    this.emailHandle=this.emailHandle.bind(this);
    this.phoneHandle=this.phoneHandle.bind(this);
  }
  onSubmitHandler =(event)=>{
    event.preventDefault();
    var address=new Address(this.state.firstNameTxt,this.state.lastNameTxt,this.state.emailTxt,this.state.phoneTxt,'NA');
    //alert(JSON.stringify(address));
    fetch('http://localhost:3000/data/insert',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(address)
    }).then(response => {
            alert("New Address added successfully")
        })
        .catch(error =>{
            alert(error+" error")
        })
  }
  firatNameHandle(event){
    this.setState({firstNameTxt: event.target.value});
  }
  lastNameHandle(event){
    this.setState({lastNameTxt: event.target.value});
  }
  emailHandle(event){
    this.setState({emailTxt: event.target.value});
  }
  phoneHandle(event){
    this.setState({phoneTxt: event.target.value});
  }
  
  render(){
    return (
      <Form onSubmit={this.onSubmitHandler}>
  <Form.Group column sm="2">

    <input style={{padding : "20px"}} type="text" value={this.state.firstNameTxt} onChange={this.firatNameHandle} placeholder="First Name" />
   </Form.Group>
   
  <Form.Group >
   <input style={{padding : "20px"}} type="text" value={this.state.lastNameTxt} onChange={this.lastNameHandle} placeholder="Last Name" />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <input style={{padding : "20px"}} type="email" value={this.state.emailTxt} onChange={this.emailHandle} placeholder="Email ID" />
       
  </Form.Group>

  <Form.Group column sm="2" controlId="formPhone">

    <input style={{padding : "20px"}} type="text" value={this.state.phoneTxt} onChange={this.phoneHandle} placeholder="List of phone numbers" />
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
  }
  }
  
  export default Add;
  