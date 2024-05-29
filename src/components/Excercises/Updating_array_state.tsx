import { useState } from "react";

const Array_state: React.FC = () => {
    const [pizza, setPizza] = useState({
        name: 'Spicy Chicken',
        toppings: ['Sweetcorn']
    });
    
    // when use click this button it will add 'Peperoni' to the toppings array
    const handleClick = () => {
        // `...` spread operator to copy/reference the pizza object
        setPizza({ ...pizza, toppings: [...pizza.toppings, 'Peperoni'] });
    }
    return ( <div></div>);
}

export default Array_state