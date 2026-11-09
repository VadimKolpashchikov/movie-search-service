import cn from 'classnames';
import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

function Button({
  face = 'accent', children, className, ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(styles['button'], styles[`button_${face}`], className)}>
      {children}
    </button>
  );
}

export default Button;
