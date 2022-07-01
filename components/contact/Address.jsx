import React from 'react';
import PropTypes from 'prop-types';
import { AddressContainer } from './contactStyles';

function Address({ address }) {
  return (
    <AddressContainer className="address-container">
      <p className="city-province">
        <span className="font-bold">Location: </span>
        <span className="city mr-2">{address.city}</span>
        <span className="prov">{address.province}</span>
      </p>
    </AddressContainer>
  );
}

Address.propTypes = { address: PropTypes.object };

export default Address;
