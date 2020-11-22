import './NavComponent.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, Form, FormControl } from 'react-bootstrap';

function NavComponent() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Address Book</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">ViewAll</Nav.Link>
      <Nav.Link href="/add">Add</Nav.Link>
      <Nav.Link href="/update">Update</Nav.Link>
      <Nav.Link href="#delete">Delete</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
}

export default NavComponent;
