import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Styling
import '../App.css';

const Footer = () => {
    return (
        <footer>
            <Container className='bg-dark footer' fluid>
                <Row>
                    <Col className='text-center p-3' > 
                        Copyright &copy; Sarah Jacobs-Luttrell
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center pb-2' >
                        <Link to={'/adminlogin'} style={{ color: 'white', fontSize: '10px' }}>Admin Login</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
