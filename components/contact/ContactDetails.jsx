import React from 'react';
import PropTypes from 'prop-types';
import Address from './Address';
import { ContactDetailsContainer } from './contactStyles';

function ContactDetails({ address, email, phone }) {
  return (
    <ContactDetailsContainer className="contact-details-container text-lg font-semibold">
      <p className="phone-field">
        <span className="font-bold mr-2">Phone:</span>
        {phone}
      </p>
      <p className="email-field">
        <span className="font-bold mr-2">Email:</span> {email}
      </p>
      <Address address={address} />
    </ContactDetailsContainer>
  );
}

ContactDetails.propTypes = { address: PropTypes.object, phone: PropTypes.string, email: PropTypes.string };

export default ContactDetails;
