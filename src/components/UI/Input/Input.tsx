import cn from 'classnames';
import styles from './Input.module.scss';
import type { InputProps } from './Input.props';

function Input({
  prepend,
  append,
  ...props
}: InputProps) {
  return (
    <label className={cn(styles.input, {
      [styles['input_with-prepend']]: prepend,
      [styles['input_with-append']]: append,
    })}
    >
      <div className={styles['input__wrap']}>
        {prepend}
        <input {...props} />
        {append}
      </div>
    </label>

  );
}

export default Input;
