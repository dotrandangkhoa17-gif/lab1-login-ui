import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold truncate">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm mb-2">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-purple-600">
          ${product.price}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
