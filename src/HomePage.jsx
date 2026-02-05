import { Button } from "@/components/ui/button"
import ProductCard from "./components/ProductCard"
import CartIcon from "./components/CartIcon"
import { Link } from "react-router-dom"

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Áo khoác Denim",
      image: "/jacket.png",
      description: "Áo khoác denim phong cách cổ điển với hiệu ứng wash loang màu độc đáo.",
      price: 41
    },
    {
      id: 2,
      name: "Áo thun Graphic",
      image: "/tshirt.png",
      description: "Áo thun cotton thoáng mát in chữ nổi bật, kiểu dáng oversize năng động.",
      price: 35.00
    },
    {
      id: 3,
      name: "Quần Jeans ống rộng",
      image: "/quần.png",
      description: "Quần jeans đen ống rộng thời thượng. Phù hợp với nhiều phong cách.",
      price: 65.50
    },
    {
      id: 4,
      name: "Mũ lưỡi trai",
      image: "/mũ .png",
      description: "Mũ lưỡi trai đen rách cá tính với dòng chữ thêu thủ công.",
      price: 25.00
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 group">
             Kitos<span className="text-primary group-hover:text-purple-700 transition-colors">Store</span>.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Shop', 'Collection', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Icons / Actions */}
          <div className="flex items-center space-x-4">
            <CartIcon />
            <div className="hidden sm:flex items-center space-x-3 ml-4 border-l pl-4 border-gray-200">
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-primary">Log in</Link>
                <Link to="/register">
                <Button size="sm" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white px-6">
                    Sign up
                </Button>
                </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">New Collection</h1>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="mt-4 text-gray-500 text-center max-w-2xl">
                Discover the latest trends in fashion. Elevate your style with our premium selection of clothing and accessories.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
