import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(item.id, value);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        {item.image && (
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        )}
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <Input 
            type="number" 
            value={item.quantity} 
            onChange={handleQuantityChange}
            className="w-16 text-center"
            min="1"
          />
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <div className="w-20 text-right font-bold">
            ${(item.price * item.quantity).toFixed(2)}
        </div>
        <Button 
          variant="destructive" 
          size="icon"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
