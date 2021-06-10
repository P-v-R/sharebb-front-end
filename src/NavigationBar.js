import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  let currUser = true;
  if (!currUser) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Sharebnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  if (currUser) {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Sharebnb</Navbar.Brand>
          <Nav.Link href="/listings">Find Your Share</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/share">Share?</Nav.Link>
              <NavDropdown title="UserProfile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Listings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Bookings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }
  
}

export default NavigationBar;