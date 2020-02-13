import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Rating from './Rating';
import styles from './styles.module.css';

Modal.setAppElement('#root');

const RateModal = ({ isOpen, closeModal, item, getItems }) => (
  <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
    <div>
      <div>
        <img src={item.url} alt={item.title} />
      </div>
      <div>
        <div>{`Name: ${item.title}`}</div>
        <div>{`Description: ${item.description}`}</div>
        <Rating item={item} getItems={getItems} />
      </div>
    </div>
  </Modal>
);

RateModal.propTypes = {
  item: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired
};

export default RateModal;
