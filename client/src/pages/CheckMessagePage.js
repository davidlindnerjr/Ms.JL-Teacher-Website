import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

// Bootstrap Components
import { Row, Col, Button, Container } from 'react-bootstrap';

// Actions
import { listMessages, deleteMesage } from '../actions/messageActions';

// Components
import ViewMessage from '../components/ViewMessage';
import Message from '../components/Message';
import Loader from '../components/Loader';

const CheckMessage = () => {

    const dispatch = useDispatch();

    const messageList = useSelector(state => state.messageList);
    const { messages, error, loading } = messageList;

    const messageDelete = useSelector(state => state.messageDelete);
    const { success } = messageDelete;

    const deleteMessageHandler = (id) => {
        dispatch(deleteMesage(id));
        window.location.reload();
    }

    useEffect(() => {
        dispatch(listMessages());
    }, [dispatch])

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark text-center' style={{ marginBottom: '20px' }}>
                    <h1 className='bg-warning my-3' style={{ fontWeight:'bold' }}>Messages</h1>
                </Col>
            </Row>
            {success && <Message variant='success'>Message Deleted!</Message>}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    {messages.map(message => (
                        <Col key={message._id} xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark rounded m-1 p-1' style={{ marginTop: '30px' }}>
                            <ViewMessage message={message} />
                            <Row>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                                    <Button className='bg-warning border-0' style={{ width: '15%' }} onClick={() => deleteMessageHandler(message._id)} style={{ marginTop: '30px', marginBottom: '20px'}}>
                                        <i className="fas fa-trash"></i> Delete Message
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    ))}    
                </Row>
            )} 
        </Container>
    )
}

export default CheckMessage;
