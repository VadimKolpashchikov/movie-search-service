import './Button.scss';

function Button({
  type = 'accent',
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`button button_${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
