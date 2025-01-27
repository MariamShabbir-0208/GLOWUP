import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Steps to Perfect Skin",
    excerpt: "Discover the ultimate skincare routine for glowing skin...",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "Natural Ingredients for Sensitive Skin",
    excerpt: "Learn about gentle, effective natural skincare ingredients...",
    imageUrl:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "The Importance of Sunscreen",
    excerpt: "Why sunscreen should be a part of your daily routine...",
    imageUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "Understanding Your Skin Type",
    excerpt: "How to determine your skin type and choose the right products...",
    imageUrl:
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "The Benefits of Face Masks",
    excerpt: "How different types of face masks can improve your skin...",
    imageUrl:
      "https://images.unsplash.com/photo-1595229207907-b2f4d0a88f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    title: "Skincare Myths Debunked",
    excerpt: "Separating fact from fiction in the world of skincare...",
    imageUrl:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
]

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-12">Our Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="text-pink-600 hover:text-pink-800">
                      Read more
                    </Link>
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

