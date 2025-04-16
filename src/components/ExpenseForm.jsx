import React, { useEffect, useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  /*UseRef 

- it is object propery current ->{current : undefiend}
- if the data assocaited with useRef is changed it does not triggers rerender which similar of being a variable 
- but when a render is trigggerd by a state varaible or something-else the data linked to useRef will
the one which is last updated  , this is unlike a  variable 
- useref is used to acess the dom nodes , also it helps in reducing render as shown in the code
  */

  // const titleRef = useRef()
  // const categoryRef = useRef()
  // const amountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID() 
    // },
    // ])

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  useEffect(() => {
    console.log('rendering')
  })

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          // ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
          // ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}