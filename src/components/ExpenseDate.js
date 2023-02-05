import "./Expense.css";

function ExpenseDate(props) {
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    props.date
  );
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
    props.date
  );
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    props.date
  );
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
