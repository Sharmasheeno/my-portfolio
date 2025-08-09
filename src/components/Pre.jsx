
import PropTypes from 'prop-types';

function Pre({ load }) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-[9999] bg-[#0c0513] transition-opacity duration-500 ${load ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

Pre.propTypes = {
    load: PropTypes.bool.isRequired
};

export default Pre;
