import PropTypes from 'prop-types';

export default function ProjectTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}

ProjectTitle.propTypes = {
  children: PropTypes.element,
};
