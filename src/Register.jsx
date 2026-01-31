import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Lock } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Simulate registration
    alert("Registration successful!")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 px-4 py-12">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400"></div>
        
        <CardHeader className="space-y-2 pt-8 pb-6 px-8">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Join us today!
          </p>
        </CardHeader>

        <CardContent className="space-y-5 px-8 pb-8">
          {error && <div className="text-red-500 text-sm text-center font-medium">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="******"
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="******"
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
