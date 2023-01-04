import React, {useState} from "react";
import "./NewExpense.css"
import NewExpenseForm from "./NewExpenseForm";


const NewExpense = (props) => {
    const [showState, setShowState] = useState(false)
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData)
        setShowState(false)
    }

    const changeShowState = ()=> {
        setShowState(true)
    }
    const onCancelHandle = ()=> {
        setShowState(false)
    }

    return (
        <div className="new-expense">
            {!showState && <button onClick={changeShowState}>Add New Expense</button>}
           {showState && <NewExpenseForm onSaveExpenseData = {saveExpenseHandler} onCancel = {onCancelHandle}/>}
        </div>
    )
}

export default NewExpense