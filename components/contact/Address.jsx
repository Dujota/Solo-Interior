import React from 'react';
import PropTypes from 'prop-types';
import { AddressContainer } from './contactStyles';

function Address({ address }) {
  return (
    <AddressContainer className="address-container">
      <p className="city-province">
        <span className="city">{address.city}</span>
        <span className="prov">{address.province}</span>
      </p>
    </AddressContainer>
  );
}

Address.propTypes = { address: PropTypes.object };

export default Address;
