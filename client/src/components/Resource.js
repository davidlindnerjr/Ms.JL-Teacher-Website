import React from 'react';

// Bootstrap Components
import { Row, Col } from 'react-bootstrap';

const Resource = ({ resource }) => {

    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className='text-center ' style={{ fontWeight: 'bold', color: 'white', paddingTop: '10px'}}>
                    {resource.title}
                </h3>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='mx-3 my-4 px-5'>
                <div style={{ color: 'white', fontSize: '20px' }}>{resource.description}</div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='mx-3 px-5' style={{ paddingBottom: '40px' }}>
                <strong>Link: </strong><a className='text-warning' href={resource.link} target='_blank rel="noreferrer"'>{resource.link}</a>
            </Col>
        </Row>
    )
}

export default Resource;