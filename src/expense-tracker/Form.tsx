import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import { useState } from 'react';
const Form: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('');  // for filter and re-rendering list
const  [ expenses, setExpenses] = useState([
  {id: 1, description: "Food", amount: 100, category: "Food"},
  {id: 2, description: "Car", amount: 500, category: "Transport"},
  {id: 3, description: "Clothes", amount: 200, category: "Clothing"},
  {id: 4, description: "Entertainment", amount: 300, category: "Entertainment"},
  {id: 5, description: "Education", amount: 400, category: "Education"},

]);

  // if selectedCategory is not empty, then filter by `category` from `expense interface` return it, else return all expenses
const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

    return (
      <><div className="mb-5">
            <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1, description: expense.description || 'Default Description' }])} />
        </div><div className="mb-3">
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
            </div><ExpenseList expenses={visibleExpenses} onDelete={id => setExpenses(expenses.filter(e => e.id !== id))} /></>
    );
  };
  
  export default Form;