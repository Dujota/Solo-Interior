import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import PropTypes from 'prop-types';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const year = format(date, 'yyyy');

  return <time dateTime={dateString}>{year}</time>;
}

Date.propTypes = { dateString: PropTypes.string };
