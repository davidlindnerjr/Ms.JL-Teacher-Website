import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Images
import CardImage from '../image/IMG-2482.JPG'

// Bootstrap Components
import { Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

// Components
import Loader from '../components/Loader';
import Message from '../components/Message';
import Announcement from '../components/Announcement';

// Actions

import { addAnnouncement, listAnnouncements, deleteAnnouncement } from '../actions/announcementActions';

const Homepage = () => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { adminUserInfo } = adminUserLogin;

    const announcementAdd = useSelector(state => state.announcementAdd);
    const { success } = announcementAdd;

    const announcementList = useSelector(state => state.announcementList);
    const { announcements, loading, error } = announcementList;

    const announcementDelete = useSelector(state => state.announcementDelete);
    const { success: successDelete } = announcementDelete

    useEffect(() => {
        dispatch(listAnnouncements());
    }, [dispatch])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addAnnouncement({title}));
        window.setTimeout(function(){window.location.reload()},500)
        setTitle('');
    }

    const deleteAnnouncementHandler = (id) => {
        dispatch(deleteAnnouncement(id));
        window.setTimeout(function(){window.location.reload()},500)
    }


    return (
        <>
            <Row className='justify-content-center'>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Card className="my-4 p-3 rounded align-items-center" >
                        <Card.Title style={{ fontWeight:'bold' }}>Ms. Jacobs-Luttrell</Card.Title>
                        <Card.Img src={CardImage} variant='top'/>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Row>
                        <Col>
                            <Card className='my-4 p-2 pt-0 rounded align-items-center'>
                                <Card.Header as='h3' className='text-center bg-warning' style={{ width: '100%', fontwWeight:'bold' }}>
                                    The Galaxy is the limit! <i class="fas fa-rocket"></i>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text style={{ fontSize: '17px', lineHeight: '30px' }}>
                                        Hey there! My name is Sarah Jacobs-Luttrel (she/her), 
                                        you can call me Ms.Jacobs-Luttrell! I am a future teacher!
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: '17px', lineHeight: '30px' }}>
                                        Walking into a  classroom can be scary, I want my students to know when
                                        they step through the door . . .
                                    </Card.Text>
                                    <ListGroup  style={{ fontSize: '15px', lineHeight: '30px' }}>
                                        <ListGroup.Item className='border-0'>
                                             - They have someone talk to
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border-0'>
                                             - Somone to support them
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border-0'>
                                             - Someone who will help them achieve their goals
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border-0'>
                                             - Learn strategies they can take with them through
                                                their educational journey
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card className='my-4 p-2 pt-0 rounded align-items-center bg-dark'>
                                <Card.Header as='h4' className='text-center bg-warning' style={{ width: '100%' }}>
                                    Announcements! <i class="fas fa-bullhorn"></i>
                                </Card.Header>

                                {success && <Message variant='success'>Announcement added!</Message>}
                                {adminUserInfo && adminUserInfo.isAdmin ? (   
                                <>
                                    <Card.Text className='text-center'> 
                                        <Form onSubmit={submitHandler} style={{ marginTop: '20px' }}>
                                            <Form.Group controlId='announcement'>
                                                <Form.Control 
                                                    type='text' 
                                                    placeholder='Enter announcement' 
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                >

                                                </Form.Control>
                                            </Form.Group>

                                            <Button type='submit' variant='warning'>
                                                Add
                                            </Button>
                                        </Form>
                                    </Card.Text>
                                    {successDelete && <Message variant='success'>Announcement deleted!</Message>}
                                    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                                    <Row>
                                        {announcements.map(x => (
                                            <>
                                                <Col key={x._id} xs={10} sm={10} md={10} lg={10} xl={10}>
                                                    <Announcement x={x} />
                                                </Col>
                                                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Button className='bg-warning' style={{marginTop: '10px', padding: '15px'}} onClick={() => deleteAnnouncementHandler(x._id)}>
                                                        <i className="fas fa-trash"></i>
                                                    </Button>
                                                </Col>
                                            </>
                                        ))}    
                                    </Row>
                                    )}
                                </>
                                ) : (
                                <>
                                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                                    <Row>
                                        {announcements.map(x => (
                                                <Col key={x._id} md={12}>
                                                    <Announcement x={x} />
                                                </Col>
                                            ))}    
                                        </Row>
                                    )}
                                </>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Homepage;
