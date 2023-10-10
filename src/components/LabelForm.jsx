const LabelForm = ({
  name,
  type,
  children,
  longText,
  value,
  onChange,
  dataOption = [],
  required = false,
  option,
  disabled = false,
}) => {
  if (longText)
    return (
      <label className="flex flex-col" htmlFor={name}>
        <span className="font-medium">{name}</span>
        <textarea
          placeholder={children}
          required={required}
          onChange={onChange}
          className="p-2 placeholder:text-xs outline-none border border-primary-color text-primary-color bg-second-color rounded-md "
          name={name}
          value={value}
          id={name}
          cols="30"
          rows="3"
        ></textarea>
      </label>
    );

  if (option)
    return (
      <label className="flex flex-col" htmlFor={name}>
        <span className="font-medium">{name}</span>
        <select
          required={required}
          onChange={onChange}
          className="p-2 placeholder:text-xs outline-none border border-primary-color text-primary-color bg-second-color rounded-md"
          name={name}
          id={name}
        >
          <option defaultChecked>Pilih {name}</option>
          {dataOption.map((item) => (
            <option key={item.id} value={item.id} selected={item.id == value}>
              {item.nama}
            </option>
          ))}
        </select>
      </label>
    );
  return (
    <label className="flex flex-col" htmlFor={name}>
      <span className="font-medium">{name}</span>
      <input
        placeholder={children}
        required={required}
        className="p-2 placeholder:text-xs outline-none border border-primary-color text-primary-color bg-second-color rounded-md "
        disabled={disabled}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
      />
    </label>
  );
};

export default LabelForm;
