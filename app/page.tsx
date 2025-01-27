import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"
import { products, blogPosts, heroImage } from "./data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">Welcome to Glow Up</h1>
            <p className="text-xl text-center text-pink-600 mb-12">
              Discover the best skincare products for your daily routine
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl aspect-[2/1]">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt="Skincare products"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pink-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

