import { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaBolt,
  FaWifi,
  FaMouse,
  FaKeyboard,
  FaCheckCircle,
} from "react-icons/fa";
import { PiEmpty } from "react-icons/pi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Styles/Store.css";

function Store() {
  const [wishlist, setWishlist] = useState([]);

  const [products] = useState([
    {
      id: 1,
      name: "Transformer Gaming Keyboard & Mouse",
      brand: "Zebronics",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      inStock: true,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUwPLx60itZkOlRzvIEUmQcJiuBxGBpDY5tfZUX_uzl7MgHYQsNXm3EUsmO2QuJkzZL_g66UKlk39q1gdMv9rU8o2z4BkLiuoQGQcmoPrKmvNwHK96ibHkdQ",
      bestSeller: true,
      rating: 4.5,
      reviews: 128,
      features: [
        { icon: <FaKeyboard />, text: "RGB Backlit" },
        { icon: <FaMouse />, text: "3200 DPI" },
      ],
    },
    {
      id: 2,
      name: "Transformer M Plus Wired Mouse",
      brand: "Zebronics",
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      inStock: false,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrzPD2ZViwY1Nu4cv9Db6ZuQnyGS8xT6a2E6sS1zISD04QwiAEA5DixWo7JAsN1SXn0xowAdQEWcs7uso2dDLQd0ao96N_YuwAbT9UlJrlfFQxr1KZ4naoCA",
      bestSeller: false,
      rating: 4.2,
      reviews: 85,
      features: [
        { icon: <FaBolt />, text: "Ergonomic" },
        { icon: <FaMouse />, text: "Optical Sensor" },
      ],
    },
    {
      id: 3,
      name: "BattleMods NinjaX Gaming Triggers",
      brand: "SpinBot",
      price: 999,
      originalPrice: 1999,
      discount: 50,
      inStock: true,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0oqIaWoLR75nFyB0-DvnOZD3m9WScqfousQdJumOu3xKa7z1_fkGnL4RKuTyCGtmLcK5GdfFSHBZMJJQdw8AipfySIk4_K_72OAsI2XGIC7s89BokaXIY",
      bestSeller: true,
      rating: 4.8,
      reviews: 342,
      features: [
        { icon: <FaBolt />, text: "Instant Response" },
        { icon: <FaWifi />, text: "Universal Clip" },
      ],
    },
  ]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };
  return (
    <>
      <Header />
      <div className="products">
        {products.map((product) => (
          <div className="cards" key={product.id}>
            {product.bestSeller && (
              <span className="best-seller-badge">Best Seller</span>
            )}
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist-btn"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? (
                  <FaHeart color="#FF5722" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>

            <div className="card-content">
              <span className="brand-name">{product.brand}</span>
              <h3 className="product-name">{product.name}</h3>

              <div className="rating-container">
                <span className="stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      color={
                        index < Math.round(product.rating) ? "#FFD700" : "#555"
                      }
                      size={12}
                    />
                  ))}
                </span>
                <span className="review-count">
                  ({product.reviews} Reviews)
                </span>
              </div>

              <div className="features-grid">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-box">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="price-container">
                <div className="price-row">
                  <span className="current-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="original-price">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="discount-tag">{product.discount}% OFF</span>
                </div>
                {product.inStock ? (
                  <div className="stock-status in-stock">
                    <FaCheckCircle /> In Stock
                  </div>
                ) : (
                  <div className="stock-status out-of-stock">
                    <PiEmpty /> Out of Stock
                  </div>
                )}
              </div>
            </div>

            <div className="buttons">
              {product.inStock ? (
                <>
                  <button>Buy Now</button>
                  <button onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  className="notify-btn"
                  onClick={() =>
                    alert("We will notify you when this item is back in stock!")
                  }
                >
                  Notify Me
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Store;
