import React, { useState } from 'react';
import Proptypes from 'prop-types';
import RateModal from './components/RateModal';

const rateModalHOC = WrappedComponent => {
  const RateModalHOC = props => {
    const { getItems } = props;
    const [isOpen, setOpen] = useState(false);
    const [item, setItem] = useState({});

    const onOpenRateModal = i => {
      setItem(i);
      setOpen(true);
    };

    const closeModal = () => {
      setOpen(false);
    };

    return (
      <>
        <RateModal
          isOpen={isOpen}
          closeModal={closeModal}
          item={item}
          getItems={getItems}
        />
        <WrappedComponent onItemClick={onOpenRateModal} {...props} />
      </>
    );
  };
  RateModalHOC.propTypes = {
    getItems: Proptypes.func.isRequired
  };
  return RateModalHOC;
};

export default rateModalHOC;
