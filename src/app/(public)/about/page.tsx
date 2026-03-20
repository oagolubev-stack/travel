export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose dark:prose-invert">
        <p>
          Welcome to Travel&Tour, your gateway to unforgettable adventures around the world.
          We are passionate about travel and dedicated to providing exceptional experiences
          that connect you with the culture, nature, and beauty of each destination.
        </p>
        <p>
          Founded in 2020, our mission is to make travel accessible, safe, and memorable.
          Our expert guides, carefully curated itineraries, and commitment to sustainability
          ensure that every journey with us is truly special.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced local guides</li>
          <li>Small group sizes for personalized attention</li>
          <li>Eco-friendly and responsible tourism practices</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
    </div>
  );
}