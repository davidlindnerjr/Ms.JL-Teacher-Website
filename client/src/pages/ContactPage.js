import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Bootstrap Components
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// Actions
import { sendMessage } from '../actions/messageActions';

// Components
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';


const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();

    const messageSend = useSelector(state => state.messageSend);
    const { loading, success } = messageSend;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(sendMessage({name, email, message}))
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
        <FormContainer>
            <h2 className='text-center my-3 rounded' style={{ fontweight: 'bold' }}>Send a Message</h2>
            {loading && <Loader/>}
            {success && <Message variant='success'>Message sent!</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter name' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='message'>
                    <Form.Label>Message</Form.Label>
                    <textarea
                        className='form-control'
                        type='text' 
                        placeholder='Enter message... ' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >

                    </textarea>
                </Form.Group>

                <Button type='submit' variant='warning'>
                    Send Message
                </Button>
            </Form>
        </FormContainer>
        <Container style={{ width: '70%' }}>
            <Row>
                <Col xs={12} md={12} lg={12} className='text-center bg-dark' style={{ marginTop: '20px', padding: '10px', opacity: '0.9', paddingBottom: '20px'}}>
                    <h3 style={{ fontWeight: 'bold' }}>Contact Information</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='text-center bg-dark' style={{ opacity: '0.9', paddingBottom: '20px'}} >
                    <h5>Email: </h5>
                    <h6>sjluttrell@comcast.net</h6>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='text-center bg-dark' style={{ opacity: '0.9', paddingBottom: '20px'}} >
                    <h5>Phone: </h5>
                    <h6>(916) 813-0041</h6>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='text-center bg-dark' style={{ opacity: '0.9', paddingBottom: '45px'}} >
                    <h5>Office Phone: </h5>
                    <h6>(###) ###-####</h6>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default ContactPage;
