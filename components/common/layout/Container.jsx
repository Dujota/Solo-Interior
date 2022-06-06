import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className="container px-12 mx-auto">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element,
};