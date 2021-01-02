import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container className='bg-dark my-4' style={{ width: '70%', opacity: '0.9', paddingBottom: '40px', marginBottom: '50px' }}>
            <Row className="justify-content-md-center" style={{ opacity: '1.0' }}>
                <Col xs={12} md={6} lg={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer;