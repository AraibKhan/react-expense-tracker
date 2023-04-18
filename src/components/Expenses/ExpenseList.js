import ExpenseItem from "./ExpenseItem";
import "./ExpenseFilter.css";
import "./Expense.css";

const ExpenseList = (props) => {
  const filterExpenseArray = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === props.filterDate
  );

  if (filterExpenseArray.length === 0)
    return <p className="expenses-filter__msg">No Items Found!</p>;

  return (
    <ul className="expense-list">
      {filterExpenseArray.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
