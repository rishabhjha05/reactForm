import { useState } from 'react';
import Input from './Input';
import Select from './Select';

const Form = ({ setData }) => {
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [amount, setAmount] = useState('');

  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});
  function validate(formData) {
    const err = {};
    if (!formData.title) err.title = 'please enter title';
    if (!formData.category) err.category = 'please select category';
    if (!formData.amount) err.amount = 'please enter any amount';
    setErrors(err);
    return err;
  }
  function submitHandler(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const entry = {};
    // for (const [key, value] of formData.entries()) {
    //   entry[key] = value;
    // }
    // console.log(entry);
    // setData((prevData) => [...prevData, { ...entry, id: crypto.randomUUID() }]);
    // e.target.reset();
    const entry = {
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      id: crypto.randomUUID(),
    };
    const err=validate(entry)
    if (Object.keys(err).length) return;
    setData((prevData) => [...prevData, { ...entry }]);
    setExpense({ title: '', category: '', amount: '' });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    delete errors[name];
    setErrors({...errors});
    setExpense((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <Input id="title" value={expense.title} onChange={handleChange} errors={errors}/>
      <Select id="category" value={expense.category} onChange={handleChange} errors={errors}/>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <p className="fieldError">{errors?.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
export default Form;
