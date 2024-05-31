import React from 'react'
interface Props {
    onSelectCategory: (category: string) => void
}
const ExpenseFilter = ({onSelectCategory}: Props) => {
    // target.value gives the value of the selected option from HTML 
    // some `EventHandler` has a `target` property that provides access to the element that triggered the event.
  return (
    <select  className='form-select' onChange={(e) => onSelectCategory(e.target.value)}>
    <option value="">All categories </option>
    <option value="Food">Food</option>
    <option value="Transport">Transport</option>
    <option value="Clothing">Clothing</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Education">Education</option>
    </select>
  )
}

export default ExpenseFilter