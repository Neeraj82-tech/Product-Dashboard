import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <div className="text-center w-100">
            <LinkContainer to='/'>
              <Navbar.Brand>Product-Dashboard</Navbar.Brand>
            </LinkContainer>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
