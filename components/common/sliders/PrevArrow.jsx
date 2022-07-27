import PropTypes from 'prop-types';
import { GrPrevious } from 'react-icons/gr';

export default function PrevArrow({ className, style, onClick }) {
  return <GrPrevious size="large" className={className} style={{ ...style, zIndex: 2 }} onClick={onClick} />;
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
