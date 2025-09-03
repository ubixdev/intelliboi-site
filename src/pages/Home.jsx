
import React, { useRef, useEffect } from 'react';
import '../style/HomePage.css';

const featuredProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$89.99",
    img: "/src/assets/wirelessheadset.jpeg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$129.99",
    img: "/src/assets/SmartWatch.png",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: "$49.99",
    img: "/src/assets/jbl speaker.png",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    price: "$59.99",
    img: "/src/assets/Fitness Tracker.png",
  },
];

const categories = [
  'Electronics',
  'Fashion',
  'Home & Living',
  'Beauty',
  'Sports',
  'Toys',
  'Groceries',
];

export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Intelliboi Store</h1>
          <p className="hero-desc">
            Discover the latest electronics, fashion, and more. Shop top brands and enjoy fast delivery, secure payments, and exclusive deals every day!<br />
            <br />

            From smart gadgets to stylish apparel, our curated selection is designed to make your life easier and more enjoyable. Experience seamless shopping, personalized recommendations, and unbeatable prices. <br />
            <br />
            <em>Ready to upgrade your lifestyle? Start exploring now and find your next favorite product!</em>
          </p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <video ref={videoRef} className="hero-img" src="/src/videos/pinterest_video_1756771468.mp4" autoPlay loop muted playsInline />
      </section>

      <h2 className="section-title">Featured Products</h2>
      <div className="featured-products">
        {featuredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img className="product-img" src={product.img} alt={product.title} />
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price}</div>
            <button className="product-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="section-title">Shop by Category</h2>
      <div className="categories">
        {categories.map(cat => (
          <div className="category-card" key={cat}>{cat}</div>
        ))}
      </div>
    </div>
  );
}
