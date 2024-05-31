import React from 'react'
interface Expense {
    id: number;
    description : string
    amount : number
    category : string
}
interface Props {
    expenses: Expense [];
    onDelete: (id: number) => void // function declaration for onDelete
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
    // this tells react to render only if expenses array is not empty
    if (expenses.length === 0) return <p className="badge bg-info">No expenses</p>
  
    return (
    <table className="table table-bordered">

      <thead>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
        </tr>
        </thead> 
        <tbody>
            { expenses.map(expenses => <tr key={expenses.id}>
                <td>{expenses.description}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.category}</td>
                <td><button className="btn btn-sm btn-danger" 
                onClick={() => onDelete(expenses.id)}>Delete</button></td>
                
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseList


// table in html for creating tables
//<tr> table row
//<td> table data
//<th> table header
//<tbody> table body, where we put data
//<tfoot> table footer, where we put totals

// about Expense Interface, in real world we will get data from server
// map() method in javascript is used to iterate over an array
// reduce() method in JS takes two arguments 1. function, 2. initial value 

// js by default provides only onClick() event