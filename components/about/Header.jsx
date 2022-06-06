import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@/components/common/typography';

function Header({ keywords }) {
  if (!keywords || !keywords?.length) return null;

  return (
    <Title className="col-start-2">
      {keywords.map((word, idx) => (
        <p key={idx} className="col-start-2" name={word} aria-label={word}>
          {word}
        </p>
      ))}
    </Title>
  );
}

Header.propTypes = { keywords: PropTypes.array };

export default Header;
