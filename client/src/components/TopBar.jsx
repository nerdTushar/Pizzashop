import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'

const TopBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
        <h6 className='text-light offer' >
                    <MdLocalOffer className='text-warning'/> &nbsp; &nbsp;
                    Free Home Delivery On Order Above 500/- Rupees</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
                    <LinkContainer to="/" activeClassName>
                          <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about" activeClassName>
                          <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact" activeClassName>
                          <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/policy" activeClassName>
                          <Nav.Link>Terms And Policy</Nav.Link>
                    </LinkContainer>
                </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar
