import './Input.scss';

function Input({
  name = 'input',
  placeholder,
  type = 'text',
  prepend,
  append,
  value = '',
  onChange,
}) {
  const rootClass = 'search-input';
  const classes = (() => {
    const result = [rootClass];

    if (prepend) {
      result.push(`${rootClass}_with-prepend`);
    }

    if (append) {
      result.push(`${rootClass}_with-append`);
    }

    return result.join(' ');
  })();

  return (
    <label className={classes}>
      <div className="search-input__wrap">
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
