import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Product from "../../components/Product"

const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    description: "Intense hydration for all skin types",
    price: 29.99,
    imageUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Gentle Cleanser",
    description: "Soft, foaming cleanser for daily use",
    price: 19.99,
    imageUrl:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Brightening Mask",
    description: "Weekly treatment for glowing skin",
    price: 34.99,
    imageUrl:
      "https://images.unsplash.com/photo-1567165698880-e8b2f3b855a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Nourishing Night Cream",
    description: "Rich moisturizer for overnight repair",
    price: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    description: "Brightening and anti-aging treatment",
    price: 44.99,
    imageUrl:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Exfoliating Scrub",
    description: "Gentle exfoliation for smooth skin",
    price: 24.99,
    imageUrl:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
]

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-12">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

