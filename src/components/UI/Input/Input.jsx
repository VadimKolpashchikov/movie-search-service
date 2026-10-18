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
  const classes = [
    styles['input'],
    prepend && styles['input_with-prepend'],
    append && styles['input_with-append'],
  ].filter(Boolean).join(' ');

  return (
    <label className={classes}>
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
