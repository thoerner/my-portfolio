import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/logo.svg';

function App() {

  const Navigation = props => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}crypt0potam.us</Navbar.Brand>
          <Navbar.Toggle aria-contols="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Connect Wallet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Disconnect
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  About Me
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  return (
    <div className="App">
      <Navigation/>
      <div className="flex">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
}

export default App;
