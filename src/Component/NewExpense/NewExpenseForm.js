import React, {useState} from "react";
import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState("")
    const [enterAmount, setEnterAmount] = useState("")
    const [enterDate, setEnterDate] = useState("")

    // const [userInput, setUserInput] = useState({
    //     enterTitle : "",
    //     enterAmount: "",
    //     enterDate: ""
    // })
    const titleChangeHandler = (e) => {
        setEnterTitle(e.target.value)
    //   setUserInput({
    //     ...userInput,
    //     enterTitle : e.target.value
    //   })

    }
    const amountChangeHandler = (e) => {
        setEnterAmount(e.target.value)
    //     setUserInput({
    //         ...userInput,
    //         enterAmount : e.target.value
    //     })
    //   console.log(userInput)

    }
    const dateChangeHandler = (e) => {
        setEnterDate(e.target.value)
    //     setUserInput({
    //         ...userInput,
    //         enterDate : e.target.value
    //     })
    //   console.log(userInput)

    }

    const submitHandler = e => {
        e.preventDefault()
        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        }
       props.onSaveExpenseData(expenseData);
        setEnterTitle("")
        setEnterAmount("")
        setEnterDate("")
    }

    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="input_type">Title</label>
                    <input id="input_type" type = "text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="input_amount">Amount</label>
                    <input id="input_amount" type = "number" min= "0.01" step = "0.01" value={enterAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="input_date">Date</label>
                    <input id="input_date" type = "date" min = "2015-01-01" max = "2022-12-31" value={enterDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "submit" onClick={props.onSubmit}>Add Expense</button>
                <button type = "button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>

    )
}

export default NewExpenseForm