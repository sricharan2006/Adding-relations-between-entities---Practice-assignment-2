import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '15px' }}>
      <img src={product.image} alt={product.name} style={{ width: '150px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
