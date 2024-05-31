import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import Button from './components/Buttons';
import ExpandableText from './components/ExpandableText';
import ExpenseList from './expense-tracker/components/ExpenseList';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const  [ expenses, setExpenses] = useState([
    {id: 1, description: "Food", amount: 100, category: "Food"},
    {id: 2, description: "Car", amount: 500, category: "Transport"},
    {id: 3, description: "Clothes", amount: 200, category: "Clothing"},
    {id: 4, description: "Entertainment", amount: 300, category: "Entertainment"},
    {id: 5, description: "Education", amount: 400, category: "Education"},

  ]);
  

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Islamabad'

];


  
  return <div>
    {alertVisible && <Alert onClose={() => setAlertVisible(false)}> Alert </Alert>}
    <Button  onClick={() => setAlertVisible(true)}>Click Me</Button>
    
    <ListGroup items={items} heading="Cities"  onSelectItem={item => console.log(item)}/>
    <ExpandableText >Hello world (testing showmore and show less button)</ExpandableText>
    <Form></Form>

    <ExpenseList expenses={expenses}  onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>;
}

export default App;
