import React from 'react';

// Bootstrap Components
import { ListGroup } from 'react-bootstrap';

const Announcment = ({ x }) => {

    return (
        <ListGroup>
            <ListGroup.Item style={{ margin: '10px' }}>
                <i style={{ fontSize: '8px', paddingRight: '10px', paddingLeft: '10px', paddingBottom: '10px' }} className="fas fa-circle"></i>
                <strong style={{ fontSize: '20px' }}>{x.title}</strong>  -  ({x.date.substring(0,10)})
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Announcment;