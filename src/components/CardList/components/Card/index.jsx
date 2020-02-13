import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import styles from './styles.module.css';

const ISOToDate = date => format(parseISO(date), 'dd.MM.yyyy');

const Card = ({ onClick, url, rate, title, date }) => (
  <div className={styles.card}>
    <div className={styles.img_container} onClick={onClick} role="presentation">
      <img src={url} alt={title} className={styles.img} />
    </div>
    <div className={styles.footer}>
      <div>{`Name: ${title}`}</div>
      <div>{`Date of adding: ${ISOToDate(date)}`}</div>
      <div>{`Rate: ${rate}`}</div>
    </div>
  </div>
);

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Card;
