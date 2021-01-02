import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Bootstrap Components
import { Form, Button } from 'react-bootstrap';

// Components
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';

// Actions
import { addCalendarEvent } from '../actions/calendarEventActions';

const AddCalender = () => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();

    const calendarEventAdd = useSelector(state => state.calendarEventAdd);
    const { loading, success } = calendarEventAdd;

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { adminUserInfo } = adminUserLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addCalendarEvent({title, link, description, date}))
        setTitle('');
        setLink('');
        setDescription('');
        setDate('');
    }

    return (
        <FormContainer>

            {adminUserInfo && adminUserInfo.isAdmin ? (
                <>
                    <h1 className='text-center'>Add Event To Calendar</h1>
                    {loading && <Loader/>}
                    {success && <Message variant='success'>Event added!</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter title' 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='link'>
                            <Form.Label>Link (optional)</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter link' 
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='date'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='(MMM D YYY) ex: Dec 29 2020'  
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description (optional)</Form.Label>
                            <textarea
                                className='form-control'
                                type='text' 
                                placeholder='Enter description... ' 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >

                            </textarea>
                        </Form.Group>

                        <Button type='submit' variant='warning'>
                            Add Event
                        </Button>
                    </Form>
                </>
            ):(<></>)}
        </FormContainer>
    )
}

export default AddCalender;
