import './Button.scss';

function Button({
  type = 'button',
  face = 'accent',
  children,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`button button_${face}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
