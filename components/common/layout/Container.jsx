import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className="container max-w-[80%]  xs:max-w-full md:max-w-full px-12 mx-auto">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
};
