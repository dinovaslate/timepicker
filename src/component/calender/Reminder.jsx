import React, { Component } from 'react';
import styles from './Calender.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import lmao3 from './static/lmao3.PNG';
const Reminder = (props) => {
  return (
    <>
      <div
        className={`${styles['d-flex-row']} ${styles['dues']}  ${styles['align-center']}`}
      >
        <div className={styles.imageBox}>
          <img src={lmao3} style={{ width: '85px' }} />
        </div>
        <div
          className={`${styles['d-flex-column']} ${styles['justify-around']} ${styles.activity}`}
          style={{ rowGap: '5px', flex: '3' }}
        >
          <div className={`${styles['activity-title']}`}>
            Meeting with client
          </div>
          <div
            className={`${styles[`d-flex-row`]} ${styles['clock']}`}
            style={{ columnGap: '10px' }}
          >
            <FontAwesomeIcon icon={faClockFour} style={{ flex: 'auto' }} />
            <div style={{ flex: 'auto' }}>09:00 - 10:00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reminder;
