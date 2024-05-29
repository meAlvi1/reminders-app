
import { useState } from 'react';
import Navbar from './components/NavBar';
import Cart from './components/Cart';

const Cart_app: React.FC = () => {
  const [cartItems, setCartItems] = useState(['Apple', 'Orange', 'Mango']);
  

  return (
    <div>
        <Navbar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default Cart_app;

