import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const getExpenseData = (data) => {
    const expenseData = {
      id: Math.ceil(Math.random() * 10),
      ...data,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={getExpenseData} />
    </div>
  );
};

export default NewExpense;
