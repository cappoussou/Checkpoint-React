import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Photo1 from './images/1.svg';
import Photo2 from './images/2.svg';
import Photo3 from './images/3.svg';
import { Card,CardGroup } from 'react-bootstrap';
import Photo4 from './images/3.png';
import Photo5 from './images/7.png';
import Photo6 from './images/8.png';

import { Form,Col,Row } from 'react-bootstrap';


function App() {
  return (
    <div>
    <div className="Navbar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">URBAN DANCE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Join Us</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Our Classes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">URBAN DANCE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">URBAN PARKOUR</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">URBAN BREAKING</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
<div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="Photo"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>URBAN DANCE ACADEMY</h3>
      <p>Peace Love Unity Respect & having Fun</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="Photo"
      src={Photo2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>URBAN DANCE ACADEMY</h3>
      <p>Peace Love Unity Respect & having Fun</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Photo"
      src={Photo3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>URBAN DANCE ACADEMY</h3>
      <p>Peace Love Unity Respect & having Fun</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div className="OurClasses" >
  <h1>OUR CLASSES</h1>
  </div> 
<div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={Photo4} />
    <Card.Body>
      <Card.Title>URBAN DANCE</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Photo5}/>
    <Card.Body>
      <Card.Title>URBAN BREAKING</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Photo6} />
    <Card.Body>
      <Card.Title>URBAN PARKOUR</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

<div className="Form1">
<Form className="Form">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

  </div>
  );
}

export default App;
