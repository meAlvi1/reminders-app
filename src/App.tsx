import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import Button from './components/Buttons';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  

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
    </div>;
}

export default App;
