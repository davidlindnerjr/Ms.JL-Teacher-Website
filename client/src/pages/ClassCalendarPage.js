import React, { useState } from 'react';
import moment from 'moment';

// Styls
import '../App.css';

// Components
import Calendar from '../components/Calendar';

// Actions
const ClassCalendar = () => {

    const [value, setValue] = useState(moment());

    return (
        <div>
            <Calendar value={value} onChange={setValue}/>
        </div>
    )
}

export default ClassCalendar;
