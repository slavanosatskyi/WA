import * as React from 'react';

import './CalendarDate.scss';

const DAYS_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class CalendarDate extends React.Component {
    render() {
        return (
            <div className="calendar-date">{this.getDate()}</div>
        );
    }

    getDate() {
        let date = new Date();
        return DAYS_WEEK[date.getDay()] + ', ' + date.getDate() + ' ' + MONTHS[(date.getMonth())]; 
    }
}