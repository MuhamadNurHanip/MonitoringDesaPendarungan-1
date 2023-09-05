const LabelForm = ({ name, type, children }) => {
  return (
    <label className="flex flex-col" htmlFor={name}>
      <span className="font-medium">{name}</span>
      <input
        placeholder={children}
        className="p-2 placeholder:text-xs outline-none border border-primary-color text-primary-color bg-second-color rounded-md "
        type={type}
        name={name}
        id={name}
      />
    </label>
  );
};

export default LabelForm;
