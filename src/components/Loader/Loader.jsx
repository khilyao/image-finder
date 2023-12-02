import { Spinner } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

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

export default Loader;
