import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="product-overlay">
                    <button className="btn-add-to-cart" onClick={() => onAdd(product)}>
                        <ShoppingBag size={18} />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
            <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}
