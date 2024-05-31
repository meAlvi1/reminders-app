import React from 'react'
import { categories } from '../../App'
interface Props {
    onSelectCategory: (category: string) => void
}
const ExpenseFilter = ({onSelectCategory}: Props) => {
    // target.value gives the value of the selected option from HTML 
    // some `EventHandler` has a `target` property that provides access to the element that triggered the event.
  return (
    <select  className='form-select' onChange={(e) => onSelectCategory(e.target.value)}>
    <option value="">All categories </option>
    {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter