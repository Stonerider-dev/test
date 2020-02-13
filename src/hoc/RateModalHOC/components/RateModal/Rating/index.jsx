import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRateEdit } from './data/actions';
import styles from './styles.module.css';

const Rating = ({ item, getItems }) => {
  const [rate, setRate] = useState(item.rate);
  const isLoading = useSelector(state => state.Rating.isLoading);
  useEffect(() => setRate(item.rate), [item]);
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(fetchRateEdit({ id: item.id, rate })).then(() => getItems());
  };
  return (
    <>
      <select
        value={rate}
        onChange={e => setRate(e.target.value)}
        className={styles.select}
      >
        <option hidden>Choose rate:</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <button
        type="submit"
        onClick={() => onButtonClick()}
        disabled={isLoading}
      >
        Rate!
      </button>
    </>
  );
};

Rating.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

export default Rating;
