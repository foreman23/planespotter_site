import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = (props) => {

    return (
        <Navbar expand="lg" variant="lighter" bg="lighter">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header