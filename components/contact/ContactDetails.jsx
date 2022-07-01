import React from 'react';
import PropTypes from 'prop-types';
import Address from './Address';
import { ContactDetailsContainer } from './contactStyles';

function ContactDetails({ address, email, phone }) {
  return (
    <ContactDetailsContainer className="contact-details-container">
      <p className="phone-field">{phone}</p>
      <p className="email-field">{email}</p>
      <Address address={address} />
    </ContactDetailsContainer>
  );
}

ContactDetails.propTypes = { address: PropTypes.object, phone: PropTypes.string, email: PropTypes.string };

export default ContactDetails;
