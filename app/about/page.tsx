import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">About Glow Up</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Skincare products"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-pink-800 mb-4">
                  At Glow Up, we believe that everyone deserves to feel confident and beautiful in their own skin. Our
                  mission is to provide high-quality, effective skincare products that cater to all skin types and
                  concerns.
                </p>
                <p className="text-lg text-pink-800 mb-4">
                  Founded in 2020, Glow Up has quickly become a trusted name in the skincare industry. We work with
                  leading dermatologists and use only the finest ingredients to create products that deliver real
                  results.
                </p>
                <p className="text-lg text-pink-800">
                  Our team is passionate about skincare education and empowering our customers to make informed
                  decisions about their skin health. Join us on our journey to healthier, more radiant skin!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

