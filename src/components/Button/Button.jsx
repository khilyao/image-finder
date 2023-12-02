const Button = ({ onClick, children }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
