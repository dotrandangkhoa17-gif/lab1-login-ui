import { Button } from "@/components/ui/button"
import ProductCard from "./components/ProductCard"
import { Link } from "react-router-dom"

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      description: "High-quality wireless headphones with noise cancellation and long battery life.",
      price: 199.99
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      description: "Track your fitness and stay connected with this stylish smart watch.",
      price: 149.99
    },
    {
      id: 3,
      name: "Digital Camera",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      description: "Capture life's moments in stunning detail with this professional digital camera.",
      price: 599.99
    },
    {
      id: 4,
      name: "Laptop Pro",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      description: "Powerful performance for professionals and content creators.",
      price: 1299.99
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TechShop
          </Link>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="hover:text-purple-600">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Register
            </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
