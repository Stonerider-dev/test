import React, { Component } from 'react';
import Proptypes from 'prop-types';
import RateModal from './components/RateModal';

const rateModalHOC = WrappedComponent => {
  class RateModalHOC extends Component {
    state = {
      isOpen: false,
      item: {}
    };

    onOpenRateModal(item) {
      this.setState({
        isOpen: true,
        item
      });
    }

    closeModal() {
      this.setState({
        isOpen: false
      });
    }

    render() {
      const { isOpen, item } = this.state;
      const { getItems } = this.props;

      return (
        <>
          <RateModal
            isOpen={isOpen}
            closeModal={() => this.closeModal()}
            item={item}
            getItems={getItems}
          />
          <WrappedComponent
            onItemClick={i => this.onOpenRateModal(i)}
            {...this.props}
          />
        </>
      );
    }
  }
  RateModalHOC.propTypes = {
    getItems: Proptypes.func.isRequired
  };
  return RateModalHOC;
};

export default rateModalHOC;
