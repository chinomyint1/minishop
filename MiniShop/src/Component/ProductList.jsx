import { useEffect, useState } from "react";

export default function Productlist() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
            {products.products && products.products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
      </div>
    );
}