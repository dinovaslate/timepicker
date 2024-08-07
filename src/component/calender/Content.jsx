import React, { useEffect } from 'react';
import styles from './Calender.module.scss';
import lodash from 'lodash';
const Content = ({
  Year,
  Date,
  selectedDate,
  setSelectedDate,
  Month,
  handleHover,
  setDialog,
}) => {
  const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const Daterange = _?.range(1, Date + 1);
  return (
    <div className={`${styles['grid-custom-calender']}`}>
      {dayOfWeek.map((day, index) => (
        <div className={styles.muted} key={index}>
          {day}
        </div>
      ))}
      {Daterange.map((Date) => (
        <div
          className={`${styles.date} ${
            selectedDate.date == Date &&
            selectedDate.month == Month &&
            selectedDate.year == Year &&
            styles['date-active']
          } `}
          key={Date}
          onMouseOver={(e) => handleHover(e)}
          onDoubleClick={() => setDialog(true)}
          onClick={() =>
            setSelectedDate({
              date: Date,
              month: Month,
              year: Year,
            })
          }
        >
          {Date}
        </div>
      ))}
    </div>
  );
};

export default Content;
