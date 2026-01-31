import { Button } from "@/components/ui/button"
import ProductCard from "./components/ProductCard"
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
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FashionStore
          </Link>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="hover:text-purple-600">Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Đăng ký
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Bộ sưu tập mới</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
