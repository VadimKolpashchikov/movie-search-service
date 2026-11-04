import cn from 'classnames';
import styles from './Button.module.scss';

function Button({
  type = 'button',
  face = 'accent',
  children,
  ref,
  onClick,
}) {
  return (
    <button
      type={type}
      className={cn(styles['button'], styles[`button_${face}`])}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
