import React, {useState}  from "react";
import Expense from "./Component/Expense/Expense.js"
import NewExpense from "./Component/NewExpense/NewExpense.js";

const initialExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  
];

function App() {
  
  const [expenseList, setExpenseList] = useState(initialExpense)

  const addExpenseHandler = expense => {
    return setExpenseList(prevExpenseList =>
       [expense, ...prevExpenseList]
    )
  };

  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expense items = {expenseList}/>
    </div>
  ) 
  // return React.createElement(Expense)
  
}

export default App;
