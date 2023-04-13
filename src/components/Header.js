import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = (props) => {

    return (
        <Navbar expand="lg" variant="lighter" bg="lighter">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{fontFamily: 'Lato', fontSize: '24px', fontWeight: '500', marginRight: '40px', color: '#5E5E5E'}} href="/">HOME</Nav.Link>
                        <Nav.Link style={{fontFamily: 'Lato', fontSize: '24px', fontWeight: '500', marginRight: '40px', color: '#5E5E5E'}} href="/portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link style={{fontFamily: 'Lato', fontSize: '24px', fontWeight: '500', marginRight: '40px', color: '#5E5E5E'}} href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header