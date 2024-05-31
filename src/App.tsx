import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import Button from './components/Buttons';
import ExpandableText from './components/ExpandableText';
import Form from './expense-tracker/Form';
import Cart_app from './Cart';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Islamabad'

];


// so only one filter so far, its in ExpenseList on Catergory filter
  
  return <div>
    <h1>Welcome to the Home Page</h1>
      <div className="mb-5">
        <Link to="/form" className="btn btn-outline-primary me-2">/Form</Link>
        <Link to="/cart" className="btn btn-outline-secondary ">/Cart</Link>
      </div>
      
    <h2 className="text-muted">Alert Button</h2>
    <div className="mb-5">
    {alertVisible && <Alert onClose={() => setAlertVisible(false)}> Alert </Alert>}
    <Button  onClick={() => setAlertVisible(true)}>Click Me</Button>
    </div>
    
    <h3 className="text-muted">List Group - practice</h3>
    <div className="mb-3">
    <ListGroup items={items} heading=" Cities"  onSelectItem={item => console.log(item)}/>
    </div>
    
    <h3 className="text-muted">Expandable Text</h3>
    <div className="mb 4">
    <ExpandableText >Hello world (testing showmore and show less button)</ExpandableText>
    </div>
    </div>;
}

export default App;
