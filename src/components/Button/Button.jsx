import './Button.scss';

function Button({ type = 'accent', children }) {
  return (
    <button type="button" className={`button button_${type}`}>
      {children}
    </button>
  );
}

export default Button;
