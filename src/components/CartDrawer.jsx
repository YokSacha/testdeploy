import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import API from '../api/axios';

export default function CartDrawer({ isOpen, onClose }) {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [promoDiscount, setPromoDiscount] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        if (isOpen) {
            fetchCart();
        }
    }, [isOpen]);


    const fetchCart = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await API.get("/api/cart");
            setCartItems(response.data.data || []);

        } catch (err) {

            console.log("Error fetching cart:", err);
            setError("Cannot load cart. Please try again.");


        } finally {
            setLoading(false);
        }
    };


    const handleRemoveItem = async (itemId) => {
        try {
            await API.delete(`/api/cart/${itemId}`);


            const newItems = cartItems.filter(item => item._id !== itemId);
            setCartItems(newItems);

        } catch (err) {
            console.log("Error removing item:", err);
            alert("Cannot remove item. Please try again.");


        }
    };


    const handleApplyPromo = async () => {
        if (!promoCode.trim()) {
            alert("Please enter a promo code");
            return;
        }

        try {
            const response = await API.post("/api/promo/validate", {
                code: promoCode,
                cartTotal: calculateSubtotal()
            });

            setPromoDiscount(response.data.discount || 0);
            alert("Promo code applied!");

        } catch (err) {
            console.log("Promo error:", err);
            alert("Invalid promo code");
            setPromoDiscount(0);
        }
    };


    const handleCheckout = async () => {
        try {
            setLoading(true);


            if (cartItems.length === 0) {
                alert("Your cart is empty!");
                return;
            }

            const response = await API.post("/api/orders/create-order", {
                items: cartItems.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity
                })),
                promoCode: promoCode
            });

            alert("Order created successfully!");
            setCartItems([]);
            onClose();
            navigate("/checkout");

        } catch (err) {
            console.log("Checkout error:", err);

            if (err.response) {
                alert(err.response.data.message || "Checkout failed");
            } else {
                alert("Cannot connect to server. Please check your internet.");
            }
        } finally {
            setLoading(false);
        }
    };


    const calculateSubtotal = () => {
        let total = 0;
        for (let item of cartItems) {
            total = total + item.price * (item.quantity || 1);
        }
        return total;
    };

    const calculateTotal = () => {
        return calculateSubtotal() - promoDiscount;
    };


    return (
        <>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40"
                    onClick={onClose}
                ></div>
            )}

            {/* Cart Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-zinc-800 z-50 transform transition-transform duration-300 flex flex-col
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                    <h2 className="text-white text-2xl font-bold">Your Cart</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">
                        ✕
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">

                    {loading && (
                        <p className="text-gray-400 text-center">Loading cart...</p>
                    )}


                    {error && (
                        <p className="text-red-400 text-center">{error}</p>
                    )}


                    {!loading && !error && cartItems.length === 0 && (
                        <p className="text-gray-400 text-center">Your cart is empty</p>
                    )}


                    {cartItems.map((item) => (
                        <div key={item._id} className="flex gap-4 mb-6">
                            <div className="w-24 h-24 bg-zinc-800 rounded-lg"></div>
                            <div className="flex-grow">
                                <h3 className="text-white font-bold">{item.name}</h3>
                                <p className="text-gray-400 text-xs">
                                    Size: {item.size || "N/A"} | Qty: {item.quantity || 1}
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-[#b4ff39] font-bold">
                                        ${item.price}
                                    </span>
                                    <button
                                        onClick={() => handleRemoveItem(item._id)}
                                        className="text-gray-500 text-xs underline hover:text-white"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="p-6 border-t border-zinc-800 bg-[#050505]">
                    {/* Promo Code */}
                    <div className="border border-[#b4ff39] rounded-xl p-3 flex gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Promo Code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="bg-transparent text-white outline-none flex-grow px-2 text-sm"
                        />
                        <button
                            onClick={handleApplyPromo}
                            className="bg-[#b4ff39] text-black font-bold text-xs px-4 py-2 rounded-lg"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>${calculateSubtotal()}</span>
                        </div>
                        {promoDiscount > 0 && (
                            <div className="flex justify-between text-green-400">
                                <span>Discount</span>
                                <span>-${promoDiscount}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-zinc-800 mt-2">
                            <span>Total</span>
                            <span>${calculateTotal()}</span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                        onClick={handleCheckout}
                        disabled={loading || cartItems.length === 0}
                        className={`w-full text-white font-bold py-4 rounded-xl transition text-lg
                            ${loading || cartItems.length === 0
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-[#1db559] hover:bg-[#189b4c] active:scale-95"
                            }
                        `}
                    >
                        {loading ? "Processing..." : "PROCEED TO CHECKOUT"}
                    </button>
                </div>
            </div>
        </>
    );
}