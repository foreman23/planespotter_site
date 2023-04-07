import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = (props) => {

    // Get the time
    let currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false });

    return (
        <Navbar expand="lg" variant="lighter" bg="lighter">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/back">PORTFOLIO</Nav.Link>
                        <Nav.Link href="/back">CALENDAR</Nav.Link>
                        <Nav.Link href="/back">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header