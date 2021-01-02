import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// Bootstrap Components
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// Actions
import { logout } from '../actions/adminUserActions';


const Header = ({ history }) => {

  const dispatch = useDispatch();

  const adminUserLogin = useSelector(state => state.adminUserLogin);
  const { adminUserInfo } = adminUserLogin;

  const logoutHandler = () => {
      dispatch(logout());
      history.push('/')
  }

    return (
        <header>
          <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container >
                <LinkContainer to='/'>
                  <Navbar.Brand style={{ fontWeight: 'bold' }}>Welcome to my online classroom!</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ml-auto'>
                  <LinkContainer to='/classcalendar'>
                    <Nav.Link className='pr-2'>Class Calender <i className="fas fa-calendar-week"></i></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/resources'>
                    <Nav.Link className='pr-2'>Resources <i className="fas fas fa-book"></i></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                    <Nav.Link className='pr-2'>Contact <i className="fas fa-phone"></i></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/aboutme'>
                    <Nav.Link className='pr-2'>About Me <i className="fas fa-chalkboard-teacher"></i></Nav.Link>
                  </LinkContainer>

                  {adminUserInfo && adminUserInfo.isAdmin && (
                        <NavDropdown title={`Admin: ${adminUserInfo.username}`} id='adminmenu'>
                        <LinkContainer to='/admin/messages'>
                            <NavDropdown.Item>Check Messages</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/calender'>
                            <NavDropdown.Item>Add to Calender</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/resources'>
                            <NavDropdown.Item>Add Resource</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/'>
                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header;