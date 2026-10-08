const Input = ({id,value,onChange,errors}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>Title</label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
      <p className="fieldError">{errors?.title}</p>
    </div>
  );
};
export default Input;