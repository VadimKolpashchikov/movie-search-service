import cn from 'classnames';
import styles from './Button.module.scss';

function Button({
  type = 'button',
  face = 'accent',
  children,
  onClick,
}) {
  return (
    <button
      type={type}
      className={cn(styles['button'], styles[`button_${face}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
