import React from 'react';
import PropTypes from 'prop-types';
import Card from './components/Card';
import styles from './styles.module.css';
import RateModalHOC from '../../hoc/RateModalHOC';

const CardList = ({ items, onItemClick }) => (
  <div className={styles.cardList}>
    {items.map(card => (
      <Card key={card.id} onClick={() => onItemClick(card)} {...card} />
    ))}
  </div>
);

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default RateModalHOC(CardList);
