import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LayoutTemplate } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { cartCount } = useCart();
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="brand">
                    <LayoutTemplate size={28} className="brand-logo" />
                    <span className="brand-name">Lumina</span>
                </Link>
                <nav className="nav-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Explore</Link>
                    <Link to="/cart" className="cart-link">
                        <div className="cart-icon-wrapper">
                            <ShoppingCart size={24} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>
                        <span className="cart-text">Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
