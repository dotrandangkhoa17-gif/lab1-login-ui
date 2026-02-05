import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div 
        className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {/* New Badge */}
        <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-full shadow-sm text-gray-900 border border-gray-100">
                NEW
            </span>
        </div>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Quick Add Overlay (Desktop) */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent ${isHovered ? 'translate-y-0' : ''}`}>
             
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
            <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-primary transition-colors">
                {product.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-1 mt-1">
            {product.description}
            </p>
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
             <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium">Price</span>
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
             </div>
             
             <div className="flex items-center gap-2">
                 <div className="relative">
                    <Input 
                        type="number" 
                        min="1" 
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 h-10 text-center rounded-lg border-gray-200 bg-gray-50 focus:bg-white transition-all text-sm"
                    />
                 </div>
                 <Button 
                    className="h-10 w-10 rounded-full bg-gray-900 hover:bg-primary transition-colors p-0 shadow-lg hover:shadow-primary/30"
                    onClick={handleAddToCart}
                 >
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                 </Button>
             </div>
        </div>
      </div>
    </div>
  )
}
