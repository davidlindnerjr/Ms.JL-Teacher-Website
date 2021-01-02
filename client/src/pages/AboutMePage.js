import React from 'react';

// Pictures
import SarahTeddy from '../image/IMG_2018.jpg';
import SarahCoraline from '../image/IMG_0216.jpg';
import SarahPumpkin from '../image/IMG_1325.JPG';
import SarahPug from '../image/IMG_7642.JPG';
import SarahPeace from '../image/IMG_7591.JPG';


// Bootstrap Components
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

const AboutMePage = () => {
    return (
        <Container className='text-center'>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className='bg-dark'>
                    <h1 className='bg-warning my-3' style={{ fontWeight:'bold' }}>About Me <i class="fas fa-chalkboard-teacher"></i></h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='bg-dark' style={{ marginTop: '20px', padding: '10px'}}>
                    <Image src={SarahTeddy} alt='sarah-pic' style={{ width: '100%', height: '100%'}}/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} className='bg-dark' style={{ marginTop: '20px', padding: '10px'}}>
                    <h3>Hey there!</h3>
                    <div className='text-left' style={{ fontSize: '17px', lineHeight: '30px' }}>
                        My name is Sarah Jacobs-Luttrell. I am a future educator, currently majoring in Liberal Studies, Natural Science-Science Education
                        and minoring in Child Development at CSU Chico. I will be graduating in the spring of 2021 and planning on attending CSU Chico's
                        Credential program in Fall of 2021. 
                    </div>
                    <br/>
                    <div className='text-left' style={{ fontSize: '17px', lineHeight: '30px' }}>
                        I love science and believe every cild should have the opportunity to learn without boundaries, create strategies they can carry
                        with them through their educational journey and life, and know they are in a safe space where they can be themselves without
                        judgment.
                    </div>
                    <Button style={{ margin: '20px', marginTop: '70px' }} className='bg-warning border-0 px-3'>Teaching Philosophy</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='bg-dark' style={{ marginTop: '20px', padding: '10px', paddingBottom: '80px'}}>
                    <Image src={SarahCoraline} alt='sarah-coraline' style={{ width: '100%', height: '100%'}}/>
                    <Button style={{ margin: '20px' }} className='bg-warning border-0 px-3'>Science Lesson Plan</Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='bg-dark' style={{ marginTop: '20px', padding: '10px', paddingBottom: '80px'}}>
                    <Image src={SarahPumpkin} alt='sarah-pumpkin' style={{ width: '100%', height: '100%'}}/>
                    <Button style={{ margin: '20px' }} className='bg-warning border-0 px-3'>Classroom Flyer</Button>  
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='bg-dark' style={{ marginTop: '20px', padding: '10px', paddingBottom: '80px'}}>
                    <Image src={SarahPug} alt='sarah-pug' style={{ width: '100%', height: '100%' }}/>
                    <Button style={{ margin: '20px' }} className='bg-warning border-0 px-3'>Classroom Layout</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} className='bg-dark text-center' style={{ marginTop: '20px', padding: '10px'}}>
                    <h4 className='bg-warning my-2 p-2' style={{ fontWeight:'bold', width: '100%' }}>Important Links</h4>
                    <div className='text-left' style={{ fontSize: '20px', lineHeight: '30px', padding: '20px' }}>
                        Here are some direct links to online resources we use in class:
                    </div>
                    <div className='text-left' style={{ fontSize: '17px', paddingLeft: '30px' }}>
                         - Zoom <Button className='bg-dark border-0'><a style={{ color: 'white'}}><i class="fas fa-paper-plane"></i></a></Button>
                    </div>
                    <div className='text-left' style={{ fontSize: '17px', paddingLeft: '30px' }}>
                         - Google Classroom <Button className='bg-dark border-0'><a style={{ color: 'white'}} href='https://classroom.google.com/' target='_blank' rel='noreferrer'><i class="fas fa-paper-plane"></i></a></Button>
                    </div>
                    <div className='text-left' style={{ fontSize: '17px', paddingLeft: '30px' }}>
                         - Online Library <Button className='bg-dark border-0'><a style={{ color: 'white'}}><i class="fas fa-paper-plane"></i></a></Button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className='bg-dark' style={{ marginTop: '20px', padding: '10px'}}>
                    <Image src={SarahPeace} alt='sarah-peace' style={{ width: '100%', height: '100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button style={{ margin: '20px' }} className='bg-warning border-0 px-3'>Resume Download</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMePage;
