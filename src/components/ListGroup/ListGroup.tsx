import { Fragment, useState} from "react";
import styles from  './ListGroup.module.css';

// props are input parameters of the component

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup( {items, heading, onSelectItem }: Props) {
    
    
    // Hooks , returns an array of two elements, variable and function, -1 means not selected
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    // if condition is True, second statement is rendered
    const message = items.length === 0 && <p>No cities found</p> ;



    // we don't have for loops in jsx, instead  we use, Array's method map()
    // in jsx,we can only use html elements or other react components 
    
    return (
    <Fragment>
    <h1>{heading}</h1>
    {message}
    <ul className={"list-group"}>
        
        {items.map( (item, index) => (<li 
                                className = { selectedIndex === index ? "list-group-item active" : "list-group-item"}
                                key={item}
                                onClick={ () => { setSelectedIndex(index)
                                    onSelectItem(item)
                                 }}
                                >{item}</li>))}
        
  </ul>
  </Fragment>
    );
}

export default ListGroup;