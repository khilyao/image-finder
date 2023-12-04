import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
