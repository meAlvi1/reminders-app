import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import Button from './components/Buttons';
import ExpandableText from './components/ExpandableText';
import ExpenseList from './expense-tracker/components/ExpenseList';
import Form from './components/Form';
import { useState } from 'react';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';


function App() {
  const [alertVisible, setAlertVisible] = useState(false);
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
  

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Islamabad'

];


// so only one filter so far, its in ExpenseList on Catergory filter
  
  return <div>
    <div className="mb-3">

    <ExpenseFilter  onSelectCategory={category => setSelectedCategory(category)}/>
    </div>
    <ExpenseList expenses={visibleExpenses}  onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}/>

    {alertVisible && <Alert onClose={() => setAlertVisible(false)}> Alert </Alert>}
    <Button  onClick={() => setAlertVisible(true)}>Click Me</Button>
    
    <ListGroup items={items} heading="Cities"  onSelectItem={item => console.log(item)}/>
    <ExpandableText >Hello world (testing showmore and show less button)</ExpandableText>
    <Form></Form>
    </div>;
}

export default App;
