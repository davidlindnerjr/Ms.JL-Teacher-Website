import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

/// Actions
import { login } from '../actions/adminUserActions';

// Components
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';

const AdminLogin = ({ location, history }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { loading, adminUserInfo, error } = adminUserLogin;
 
    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(adminUserInfo){
            history.push(redirect);
        }
    }, [history, adminUserInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        //dispacth login
        dispatch(login(username, password));
    }

    return (
      <FormContainer>
          <h1 className='text-center'>Admin Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader/>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='warning'>
                Sign In
            </Button>

          </Form>
      </FormContainer>
    )
}

export default AdminLogin;
