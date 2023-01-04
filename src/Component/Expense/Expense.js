import React, {useState} from "react";
import Card from "../UI/Card.js";
import "./Expense.css"
import ExpneseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from "./ExpenseChart.js"

function Expense(props) {    
      const [filterExpense, setFilterExpense] = useState('All')
      const filterChangeHandler = filterExpense => {
        setFilterExpense(filterExpense);
      };
      const filterExpenseList = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterExpense
      })

      
      return (
        <Card className = "expense"> 
          <ExpneseFilter selected = {filterExpense} onChangeFilter = {filterChangeHandler}/>
          <ExpenseChart expense = {filterExpenseList} />
          <ExpenseList items = {filterExpenseList}/>
        </Card>
      );
}


export default Expense