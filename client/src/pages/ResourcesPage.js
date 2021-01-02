import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

// Bootstrap Components
import { Row, Col, Button, Container } from 'react-bootstrap';

// Actions
import { listResources, deleteResource } from '../actions/resourceActions';

// Components
import Resource from '../components/Resource';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ResourcesPage = () => {

    const dispatch = useDispatch();

    const resourceList = useSelector(state => state.resourceList);
    const { resources, error, loading } = resourceList;

    const resourceDelete = useSelector(state => state.resourceDelete);
    const { success } = resourceDelete;

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { adminUserInfo } = adminUserLogin;

    const deleteResourceHandler = (id) => {
        dispatch(deleteResource(id));
        window.location.reload();
    }

    useEffect(() => {
        dispatch(listResources());
    }, [dispatch])

    return (
        <Container>
            <Row >
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark text-center' style={{ marginBottom: '20px' }}>
                    <h1 className='bg-warning my-3' style={{ fontWeight:'bold' }}>Resources</h1>
                </Col>
            </Row>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                {adminUserInfo && adminUserInfo.isAdmin ? (
                    <>
                    {success && <Message variant='success'>Resource Deleted!</Message>}
                        <Row className='justify-content-between'>
                            {resources.map(resource => (
                                <Col key={resource._id} xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark rounded m-1 p-1' style={{ marginTop: '30px' }}>
                                    <Resource resource={resource}/>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                                            <Button className='bg-warning border-0' onClick={() => deleteResourceHandler(resource._id)} style={{ marginTop: '30px', marginBottom: '20px'}}>
                                                <i className="fas fa-trash"></i> Delete
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </>
                ) : (
                    <Row className='justify-content-between'>
                        {resources.map(resource => (
                            <Col key={resource._id} xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark rounded m-1 p-1' style={{ marginTop: '20px', width: '80%', paddingBottom: '50px' }}>
                                <Resource resource={resource}/>
                            </Col>
                        ))}
                    </Row>
                )}
                </>
            )}

        </Container>
    )
};

export default ResourcesPage;
