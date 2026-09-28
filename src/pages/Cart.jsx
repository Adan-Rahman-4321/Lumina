import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const [orderComplete, setOrderComplete] = useState(false);

    const handleCheckout = (formData) => {
        console.log('Order submitted for:', formData);
        clearCart();
        setOrderComplete(true);
    };

    if (orderComplete) {
        return (
            <div className="page cart-page empty-cart-state">
                <div className="success-icon">🎉</div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase. Your premium items will be shipped shortly.</p>
                <Link to="/" className="btn btn-primary mt-4">Continue Shopping</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="page cart-page empty-cart-state">
                <div className="empty-cart-icon">🛒</div>
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="btn btn-primary mt-4">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="page cart-page">
            <h1 className="page-title">Shopping Cart</h1>

            <div className="cart-layout">
                <div className="cart-items-section">
                    <div className="cart-items-list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />

                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-category">{item.category}</p>
                                    <div className="cart-item-price">${item.price.toFixed(2)}</div>
                                </div>

                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button className="btn-qty" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                            <Minus size={16} />
                                        </button>
                                        <span className="quantity-text">{item.quantity}</span>
                                        <button className="btn-qty" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button className="btn-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="summary-row total-row">
                            <span>Total Amount:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-section">
                    <CheckoutForm onSubmit={handleCheckout} />
                </div>
            </div>
        </div>
    );
}
