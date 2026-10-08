const Select = ({ id, value, onChange, errors, options,label }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>

      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="" hidden>
          Select Category
        </option>
        {options.map((option,idx) => (
          <option value={option} key={idx}>{option}</option>
        ))}
      </select>
      <p className="fieldError">{errors?.category}</p>
    </div>
  );
};
export default Select;
