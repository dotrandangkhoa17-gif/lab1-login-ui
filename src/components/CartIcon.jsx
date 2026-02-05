import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="relative group">
      <Button variant="ghost" className="relative p-2 hover:bg-gray-100 rounded-full h-10 w-10 transition-colors">
        <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-primary transition-colors" />
        {totalItems > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartIcon;
