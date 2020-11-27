import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Display extends React.Component {   
   constructor(props){
      super(props);
      this.state={
         addressList:[]
      };
      
    }
    componentDidMount() {
      fetch(`http://localhost:3000/data`)
        .then(res => res.json())
        .then(json => this.setState({ addressList: json }));
    }
   render() {
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
        <Container>    
        <Row>
          {this.state.addressList.map(addr => (
             
            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
          <Card.Title>{addr.firstName}  {addr.lastName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{addr.email}</Card.Subtitle>
              <Card.Text>
                {addr.phoneNumbers}
              </Card.Text>
              <Card.Text>
                {addr.description}
              </Card.Text>
              
               <Link to={{ pathname: '/update', query: addr }}>Edit</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>
        </Container>
         </div>
      );
   }
}
export default Display;