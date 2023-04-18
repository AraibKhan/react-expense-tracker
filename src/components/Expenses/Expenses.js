import { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterData, setFilterData] = useState("2023");

  const filterChangeHandler = (data) => {
    setFilterData(data);
  };

  const filterExpenseArray = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterData
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterData}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenseArray} />
      <ExpenseList expenses={props.expenses} filterDate={filterData} />
    </Card>
  );
}

export default Expenses;
