const Input = ({ id, value, onChange, errors, label }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={value} onChange={onChange} />
      <p className="fieldError">{errors[id]}</p>
    </div>
  );
};
export default Input;
