import cn from 'classnames';
import styles from './Input.module.scss';

function Input({
  name = 'input',
  placeholder,
  type = 'text',
  prepend,
  append,
  value = '',
  onChange,
}) {
  return (
    <label className={cn(styles.input, {
      [styles['input_with-prepend']]: prepend,
      [styles['input_with-append']]: append,
    })}
    >
      <div className={styles['input__wrap']}>
        {prepend}

        <input
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />

        {append}
      </div>
    </label>

  );
}

export default Input;
