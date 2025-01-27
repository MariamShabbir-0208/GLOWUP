import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Image from "next/image"
import CommentSection from "../../../components/CommentSection"

const blogPosts = [
  {
    id: 1,
    title: "10 Steps to Perfect Skin",
    content:
      "Achieving perfect skin requires dedication and a consistent routine. Here are 10 steps to help you get that glowing, healthy skin you've always wanted:\n\n1. Cleanse thoroughly: Use a gentle cleanser twice daily to remove dirt, oil, and makeup.\n2. Use toner: Balance your skin's pH and remove any remaining impurities.\n3. Apply serum: Target specific skin concerns with concentrated active ingredients.\n4. Moisturize: Keep your skin hydrated and protected.\n5. Protect with sunscreen: Apply SPF daily to prevent sun damage and premature aging.\n6. Exfoliate weekly: Remove dead skin cells to reveal brighter, smoother skin.\n7. Use face masks: Treat your skin to extra nourishment and address specific concerns.\n8. Get enough sleep: Allow your skin time to repair and regenerate.\n9. Stay hydrated: Drink plenty of water to keep your skin plump and healthy.\n10. Eat a balanced diet: Nourish your skin from the inside out with a diet rich in fruits, vegetables, and healthy fats.\n\nBy following these steps consistently, you'll be on your way to achieving the perfect skin you've always dreamed of.",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Natural Ingredients for Sensitive Skin",
    content:
      "If you have sensitive skin, finding the right skincare products can be challenging. Natural ingredients can be a great solution. Here are some gentle, effective natural ingredients for sensitive skin:\n\n1. Aloe Vera: Soothes and hydrates irritated skin.\n2. Chamomile: Calms redness and inflammation.\n3. Oatmeal: Relieves itching and protects the skin barrier.\n4. Green Tea: Provides antioxidant protection and reduces inflammation.\n5. Calendula: Heals and soothes dry, irritated skin.\n6. Jojoba Oil: Moisturizes without clogging pores.\n7. Shea Butter: Nourishes and protects the skin.\n\nWhen using products with these ingredients, always patch test first and introduce new products gradually into your routine. Remember that even natural ingredients can cause reactions in some people, so it's essential to pay attention to how your skin responds.",
    imageUrl:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Importance of Sunscreen",
    content:
      "Sunscreen is a crucial part of any skincare routine, regardless of your skin type or the weather outside. Here's why sunscreen should be a non-negotiable step in your daily regimen:\n\n1. Prevents Premature Aging: UV rays break down collagen and elastin, leading to wrinkles and sagging skin.\n2. Reduces Cancer Risk: Regular sunscreen use lowers the risk of developing skin cancer.\n3. Maintains Even Skin Tone: Sunscreen helps prevent hyperpigmentation and dark spots.\n4. Protects Against Sunburn: Sunburns can be painful and increase the risk of skin damage.\n5. Supports Overall Skin Health: By protecting your skin from damage, sunscreen helps maintain its overall health and appearance.\n\nWhen choosing a sunscreen, look for broad-spectrum protection with an SPF of at least 30. Apply it generously to all exposed skin, and reapply every two hours or after swimming or sweating. Remember, the best sunscreen is the one you'll use consistently!",
    imageUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Understanding Your Skin Type",
    content:
      "Knowing your skin type is essential for choosing the right skincare products and creating an effective routine. Here's a guide to help you determine your skin type:\n\n1. Normal Skin: Balanced, not too oily or dry, with few imperfections.\n2. Oily Skin: Shiny, greasy, with enlarged pores and prone to acne.\n3. Dry Skin: Rough, flaky, tight, and may have visible fine lines.\n4. Combination Skin: Oily in some areas (usually T-zone) and dry in others.\n5. Sensitive Skin: Easily irritated, may sting or burn after product use.\n\nTo determine your skin type, wash your face with a gentle cleanser and wait an hour without applying any products. Then, observe how your skin feels and looks:\n\n- If it feels tight and flaky, you likely have dry skin.\n- If it's shiny all over, you probably have oily skin.\n- If it's oily in some areas and dry in others, you have combination skin.\n- If your skin feels comfortable and balanced, you likely have normal skin.\n\nRemember, your skin type can change over time due to factors like age, climate, and hormones. Regularly reassess your skin type and adjust your skincare routine accordingly.",
    imageUrl:
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "The Benefits of Face Masks",
    content:
      "Face masks are a popular and effective way to give your skin an extra boost of care. Here's how different types of face masks can improve your skin:\n\n1. Clay Masks: Absorb excess oil, unclog pores, and purify the skin.\n2. Sheet Masks: Deliver intense hydration and various active ingredients to the skin.\n3. Gel Masks: Soothe and cool the skin, great for sensitive or irritated skin.\n4. Cream Masks: Provide deep hydration and nourishment for dry or mature skin.\n5. Exfoliating Masks: Remove dead skin cells, revealing brighter, smoother skin.\n6. Overnight Masks: Work while you sleep to deeply hydrate and repair the skin.\n\nTo get the most out of your face masks:\n\n- Choose masks that address your specific skin concerns.\n- Always start with clean skin before applying a mask.\n- Follow the recommended application time – longer isn't always better.\n- Use masks consistently, typically 1-3 times per week, depending on your skin's needs.\n- Follow up with your regular skincare routine after removing the mask.\n\nRemember, while face masks can provide great benefits, they should complement, not replace, your daily skincare routine.",
    imageUrl:
      "https://images.unsplash.com/photo-1595229207907-b2f4d0a88f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Skincare Myths Debunked",
    content:
      "The world of skincare is full of advice, but not all of it is based on fact. Let's separate some common skincare myths from reality:\n\n1. Myth: Oily skin doesn't need moisturizer.\nReality: All skin types need hydration. Use a light, oil-free moisturizer for oily skin.\n\n2. Myth: The more you wash your face, the clearer it will be.\nReality: Over-washing can strip your skin of natural oils, leading to irritation and more oil production.\n\n3. Myth: Natural ingredients are always better and safer.\nReality: Natural doesn't always mean better or safer. Some natural ingredients can be irritating, while some synthetic ingredients are perfectly safe and effective.\n\n4. Myth: You don't need sunscreen on cloudy days or when indoors.\nReality: UV rays can penetrate clouds and windows. Use sunscreen daily, regardless of the weather or if you're staying inside.\n\n5. Myth: Anti-aging products are only for older people.\nReality: Prevention is key. Starting a good skincare routine early can help maintain youthful skin longer.\n\n6. Myth: Drinking water cures dry skin.\nReality: While hydration is important for overall health, applying moisturizer is more effective for treating dry skin.\n\nRemember, everyone's skin is unique. What works for one person may not work for another. Always listen to your skin and consult with a dermatologist for personalized advice.",
    imageUrl:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === Number.parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">{post.title}</h1>
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg mb-8 mx-auto"
            />
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose prose-pink mx-auto">
                {post.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <CommentSection postId={post.id} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

