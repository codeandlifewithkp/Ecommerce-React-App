import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { useCart } from "../Context/CartContext";

function ProductCard({ product, toggleWishlist, wishlist }) {
  // const { addToCart } = useCart();

  return (
    <div className="cards">
      <div className="wishlist-icon" onClick={() => toggleWishlist(product.id)}>
        {wishlist.includes(product.id) ? (
          <FaHeart color="#FF5722" />
        ) : (
          <FaRegHeart />
        )}
      </div>
      <img src={product.image} alt={product.name} />
      <div className="name">
        <h3>{product.name}</h3>
      </div>

      <div className="buttons">
        <button>Buy Now</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
