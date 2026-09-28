import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
    const { addToCart } = useCart();

    return (
        <div className="page home-page">
            <div className="hero-section">
                <h1>Discover Premium Essentials</h1>
                <p>Elevate your lifestyle with our curated collection of high-quality products.</p>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAdd={addToCart} />
                ))}
            </div>
        </div>
    );
}
