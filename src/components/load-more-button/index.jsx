import { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          page === 0 ? 0 : page * 20
        }`
      );
      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="products-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product-item">
                <img src={item.images} alt="products" />
                <h3>{item.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disabled} onClick={() => setPage(page + 1)}>
          Load more
        </button>
        {disabled && <p>No more products to load</p>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
