import React from 'react';

// Bootstrap Components
import { Row, Col } from 'react-bootstrap';

const ViewMessage = ({ message }) => {

    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='text-white mx-5'>
                <h4 className='text-left ' style={{ fontWeight: 'bold', color: 'white', paddingTop: '10px'}}>
                    Name: {message.name}
                </h4>
            </Col>
            <Col  xs={12} sm={12} md={12} lg={12} xl={12} className='mx-3 my-3 px-5'>
                <strong>Email: </strong>{message.email}
            </Col>
            <Col  xs={12} sm={12} md={12} lg={12} xl={12} className='mx-3 my-3 px-5'>
                <div style={{ color: 'white', fontSize: '20px' }}>{message.message}</div>
            </Col>
        </Row>
    )
}

export default ViewMessage;
