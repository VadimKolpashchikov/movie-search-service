import './Input.scss';

function Input({
  name = 'input',
  placeholder,
  type = 'text',
  prepend,
  append,
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
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autocomplete="off"
        />

        {append}
      </div>
    </label>

  );
}

export default Input;
