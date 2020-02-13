import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from './data/actions';
import CardList from '../CardList';

const ListContainer = () => {
  const dispatch = useDispatch();
  const getItems = () => dispatch(fetchCards());
  useEffect(() => getItems(), []);
  const items = useSelector(state => state.Cards.items);
  return <CardList items={items} getItems={getItems} />;
};

export default ListContainer;
