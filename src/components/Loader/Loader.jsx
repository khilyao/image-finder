import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Spinner } from './Loader.styled';

const Loader = ({ visible }) => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={visible}
      />
    </Spinner>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
