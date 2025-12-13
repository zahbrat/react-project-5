export default function Input({
  withBtn = false,
  placeholder,
  type,
  l = false,
  id,
  r = false,
  className = "",
  onChange,
  value = "",
  ...rest
}) {
  const inputClasses =
    "text-md placeholder-neutral-500 text-neutral-500 bg-neutral-200 py-2 px-8 outline-none w-full " +
    (withBtn ? "rounded-l-[10px] " : "rounded-[10px] ") +
    className;

  if (l) {
    return (
      <div>
        <label className="mb-2 block" htmlFor={id}>
          {placeholder}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={r}
          value={value}
          onChange={onChange}
          className={inputClasses}
          {...rest}
        />
      </div>
    );
  } else {
    return (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        required={r}
        onChange={onChange}
        className={inputClasses}
        {...rest}
      />
    );
  }
}
