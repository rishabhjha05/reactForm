const Select = ({ id, value, onChange, errors }) => {
  return (
    <div className="input-container">
      <label htmlFor="category">Category</label>

      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="" hidden>
          Select Category
        </option>
        <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Bills">Bills</option>
        <option value="Education">Education</option>
        <option value="Medicine">Medicine</option>
      </select>
      <p className="fieldError">{errors?.category}</p>
    </div>
  );
};
export default Select;
