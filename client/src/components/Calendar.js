import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Bootstrap Components
import { Button, Container, Row, Col } from 'react-bootstrap';

// Actions
import { listCalendarEvent, deleteCalendarEvent } from '../actions/calendarEventActions';

// Components
import { buildCalendar } from '../components/SetCalendar';
import Loader from '../components/Loader';
import Message from '../components/Message';

// Calendar Styles
import '../CalendarStyles.css'

const Calendar = ({ value, onChange }) => {

    const dispatch = useDispatch();

    const calendarEventList = useSelector(state => state.calendarEventList);
    const { calendarEvents, error, loading } = calendarEventList;

    const calendarEventDelete = useSelector(state => state.calendarEventDelete);
    const { success } = calendarEventDelete;

    const adminUserLogin = useSelector(state => state.adminUserLogin);
    const { adminUserInfo } = adminUserLogin;

    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    },[value]);

    useEffect(() => {
        dispatch(listCalendarEvent());
    },[]);

    const deleteCalendarEventHandler = (id) => {
        dispatch(deleteCalendarEvent(id));
        window.location.reload();
    }

    // Calendar functions
    const isSelected = (day) => {
        return value.isSame(day, 'day');
    }

    const beforeToday = (day) => {
        return day.isBefore(new Date(), 'day');
    }

    const isToday = (day) => {
        return day.isSame(new Date(), 'day');
    }

    const dayStyles = (day) => {
        if(beforeToday(day)) return 'before';
        if(isSelected(day)) return  'selected bg-warning';
        if(isToday(day)) return 'today';
        return ''
    }

    const currMonthName = () => {
        return value.format('MMM');
    }

    const currYear = () => {
        return value.format('YYYY')
    }

    const prevMonth = () => {
        return value.clone().subtract(1, 'month');
    }

    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }

    return (
        <Container className='calendar-container'>
        {adminUserInfo && adminUserInfo.isAdmin ? (
            <>
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                    <>
                        <Row className='bg-warning text-center month'>
                            <Col 
                                className='previous'
                                onClick={() => onChange(prevMonth())}
                            >
                                {String.fromCharCode(171)}
                            </Col>
                            <Col
                                className='current'
                            >
                                {currMonthName()} {currYear()}
                            </Col>
                            <Col 
                                className='next'
                                onClick={() => onChange(nextMonth())}
                            >
                                {String.fromCharCode(187)}
                            </Col>
                        </Row>
                        <Row className='bg-dark text-center'>
                            <Col>
                                <Row className='day-names'>
                                    {['s', 'm', 't', 'w', 't', 'f', 's'].map(d => <Col className='week'>{d}</Col>)}
                                </Row>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                            {calendar.map(week => (
                                <Row>
                                    {week.map(day => (
                                        <Col className='text-left' onClick={() => onChange(day)}>
                                            <Row>
                                                <Col className='px-3 pb-3 calendar-day-column'>
                                                    <div className={dayStyles(day)}>
                                                        {day.format('D')}
                                                    </div>
                                                    {calendarEvents.map(event => (
                                                        <>
                                                            {event.date === day.format('MMM D YYYY') ? (
                                                                <>
                                                                    <div className={`text-left event-text ${dayStyles(day)}`}>
                                                                        <div className='event-title'>
                                                                            {event.title}
                                                                        </div>
                                                                        <div className='event-description'>
                                                                            {event.description}
                                                                        </div>
                                                                        {event.link && (
                                                                            <>
                                                                                <span style={{color: 'black', fontSize: '9px'}}>Link:</span><a className='event-link' href={event.link} target='_blank' rel="noreferrer">{event.link}</a>
                                                                            </>
                                                                        )}
                                                                        <div>
                                                                            <Button className='bg-warning border-0' onClick={() => deleteCalendarEventHandler(event._id)}>
                                                                                <i className='fas fa-trash event-delete'></i>
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                            </Col>
                        </Row>
                    </>
                )}
            </>
            ) : (
            <>
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                    <>
                        <Row className='bg-warning text-center month'>
                            <Col 
                                className='previous'
                                onClick={() => onChange(prevMonth())}
                            >
                                {String.fromCharCode(171)}
                            </Col>
                            <Col
                                className='current'
                            >
                                {currMonthName()} {currYear()}
                            </Col>
                            <Col 
                                className='next'
                                onClick={() => onChange(nextMonth())}
                            >
                                {String.fromCharCode(187)}
                            </Col>
                        </Row>
                        <Row className='bg-dark text-center'>
                            <Col>
                                <Row className='day-names'>
                                    {['s', 'm', 't', 'w', 't', 'f', 's'].map(d => <Col className='week'>{d}</Col>)}
                                </Row>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                            {calendar.map(week => (
                                <Row>
                                    {week.map(day => (
                                        <Col className='text-left' onClick={() => onChange(day)}>
                                            <Row>
                                                <Col className='px-3 pb-3 calendar-day-column'>
                                                    <div className={dayStyles(day)}>
                                                        {day.format('D')}
                                                    </div>
                                                    {calendarEvents.map(event => (
                                                        <>
                                                            {event.date === day.format('MMM D YYYY') ? (
                                                                <>
                                                                    <div className={`text-left event-text ${dayStyles(day)}`}>
                                                                        <div className='event-title'>
                                                                            {event.title}
                                                                        </div>
                                                                        <div className='event-description'>
                                                                            {event.description}
                                                                        </div>
                                                                            {event.link && (
                                                                                <>
                                                                                    <span style={{color: 'black', fontSize: '9px'}}>Link:</span><a className='event-link' href={event.link} target='_blank'  rel="noreferrer">{event.link}</a>
                                                                                </>
                                                                            )}
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                            </Col>
                        </Row>
                    </>
                )}
            </>
            )}
        </Container>
    )
}

export default Calendar;

