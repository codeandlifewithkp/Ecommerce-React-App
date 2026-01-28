import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Styles/Home.css";
import ProductCard from "../Components/Product-Card";
import MarqueeContainer from "../Components/Marquee-Container";
import { productsData } from "../Data/productsData";

function Home() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  return (
    <>
      <Header />
      <section className="hero">
        <h1>
          Gaming
          <br /> <span className="glitch-text">Accessories</span>
        </h1>
        <p>Next-Gen Gaming Hardware for the elite</p>
        <Link to={"/store/"} class="cta-page">
          Enter Store
        </Link>
      </section>

      <MarqueeContainer />
      <section className="popular-products">
        <h1>Popular Products</h1>
        <button className="ctabtn">View All</button>
        <div className="products">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
