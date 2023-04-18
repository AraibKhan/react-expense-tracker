import { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [displayForm, setDisplayForm] = useState(0);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      title,
      amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    setDisplayForm(0);
    props.onSaveExpenseData(userData);
  };

  const displayFormHandler = () => {
    if (!displayForm) return setDisplayForm(1);
    setDisplayForm(0);
  };

  if (!displayForm)
    return (
      <button
        className="new-expense__action add-expense-btn"
        onClick={displayFormHandler}
      >
        Add New Expense
      </button>
    );

  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={title} onChange={titleHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={amount} onChange={amountHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={date}
          onChange={dateHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button
          type="reset"
          className="new-expense__action"
          onClick={displayFormHandler}
        >
          Cancel
        </button>
        <button type="submit" className="new-expense__action">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
