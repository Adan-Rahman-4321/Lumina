import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CheckoutForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.address.trim()) newErrors.address = 'Shipping address is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-form-header">
                <h2 className="form-title">Shipping Details</h2>
                <p className="form-subtitle">Please enter your information to complete the purchase.</p>
            </div>

            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="e.g. Jane Doe"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="jane@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="address">Shipping Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`form-input ${errors.address ? 'input-error' : ''}`}
                    placeholder="123 Example Street, Apt 4B, City, Country"
                    rows="3"
                ></textarea>
                {errors.address && <span className="error-text">{errors.address}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-checkout">
                <CheckCircle2 size={20} />
                <span>Confirm Order</span>
            </button>
        </form>
    );
}
