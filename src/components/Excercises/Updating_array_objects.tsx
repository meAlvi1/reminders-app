import { useState } from "react";

const Arr_obj: React.FC = () => {
    const [cart, setCart] = useState({
        discount: 1,
        items: [
            { id: 1, name: "Item 1", price: 10, quantity: 2 },
            { id: 2, name: "Item 2", price: 20, quantity: 1 }
        ]
    });

    const handleClick = () => {
        const updatedItems = cart.items.map(item => {
            if (item.id === 1) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        });
        setCart({ ...cart, items: updatedItems });
    };

    return (
        <div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    );
};

export default Arr_obj;

