import cn from 'classnames';
import PropTypes from 'prop-types';
import Container from '../layout/Container';

export default function PreviewAlert({ preview }) {
  if (preview) {
    return (
      <div
        className={cn('border-b', {
          'bg-accent-7 border-accent-7 text-white': preview,
          'bg-accent-1 border-accent-2': !preview,
        })}
      >
        <Container>
          <div className="py-2 text-center text-sm">
            This page is a preview.{' '}
            <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
              Click here
            </a>{' '}
            to exit preview mode.
          </div>
        </Container>
      </div>
    );
  }

  return null;
}
PreviewAlert.propTypes = {
  preview: PropTypes.bool,
};
