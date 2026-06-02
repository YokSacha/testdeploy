import React, { useState } from 'react';

const CheckoutPage = () => {

    const [orderSummary] = useState({
        item: "Nike Pegasus 41",
        pricePerDay: 150,
        days: 7,
        shipping: 50,
        discount: 20
    });

    const subtotal = orderSummary.pricePerDay * orderSummary.days;
    const total = subtotal + orderSummary.shipping - orderSummary.discount;

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Form Sections */}
                <div className="lg:col-span-2 space-y-8">
                    <h1 className="text-3xl font-bold">Rental Summary</h1>

                    <section className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
                        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg w-full" />
                            <input type="tel" placeholder="Phone Number" className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg w-full" />
                            <textarea placeholder="Shipping Address" className="col-span-2 bg-neutral-950 border border-neutral-800 p-3 rounded-lg w-full h-24" />
                        </div>
                    </section>

                    <section className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
                        <h2 className="text-xl font-semibold mb-4">Select Dates</h2>
                        <div className="flex gap-4">
                            <input type="date" className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg flex-1" />
                            <span className="self-center">to</span>
                            <input type="date" className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg flex-1" />
                        </div>
                    </section>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 sticky top-8">
                        <h2 className="text-2xl font-bold mb-6">Payment Total</h2>

                        <div className="space-y-4 text-neutral-400">
                            <div className="flex justify-between">
                                <span>{orderSummary.item}</span>
                                <span>฿{subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Fee</span>
                                <span>฿{orderSummary.shipping}</span>
                            </div>
                            <div className="flex justify-between text-red-400">
                                <span>Discount</span>
                                <span>-฿{orderSummary.discount}</span>
                            </div>
                            <div className="border-t border-neutral-800 pt-4 flex justify-between text-xl font-bold text-neutral-100">
                                <span>Total Amount</span>
                                <span className="text-lime-400">฿{total}</span>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-lime-400 hover:bg-lime-500 text-neutral-950 font-bold py-4 rounded-xl transition duration-200">
                            Confirm Rental
                        </button>
                        <p className="text-center text-xs text-neutral-600 mt-4">
                            By clicking, you agree to KINETIX rental terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;