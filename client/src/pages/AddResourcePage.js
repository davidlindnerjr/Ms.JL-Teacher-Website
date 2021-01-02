import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Bootstrap Components
import { Form, Button } from 'react-bootstrap';

// Actions
import { addResource } from '../actions/resourceActions';

// Components
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';


const AddResourcePage = () => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();

    const resourceAdd = useSelector(state => state.resourceAdd);
    const { loading, success } = resourceAdd;

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { adminUserInfo } = adminUserLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addResource({title, link, description}))
        setTitle('');
        setLink('');
        setDescription('');
    }

    return (
        <FormContainer>

            {adminUserInfo && adminUserInfo.isAdmin ? (
                <>
                    <h1 className='text-center'>Add a Resource</h1>
                    {loading && <Loader/>}
                    {success && <Message variant='success'>Resource added!</Message>}
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
                            <Form.Label>Link</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter link' 
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
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
                            Add Resource
                        </Button>
                    </Form>
                </>
            ) : (<></>)}
        </FormContainer>
    )
}

export default AddResourcePage;
