import React from 'react';


export default function CartDrawer({ isOpen, onClose }) {
    return (
        <>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity backdrop-blur-sm"
                    onClick={onClose}
                ></div>
            )}


            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >


                <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                    <h2 className="text-white text-2xl font-bold">Your Cart</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-[#b4ff39] text-xl transition"
                    >
                        ✕
                    </button>
                </div>


                <div className="flex-1 overflow-y-auto p-6 space-y-6">


                    <div className="flex gap-4">

                        <div className="w-24 h-24 bg-zinc-800 rounded-lg flex-shrink-0"></div>
                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-white font-bold">Nike Alphafly 3</h3>
                                <p className="text-gray-400 text-xs">Size: US 10 | 3 Days Rental</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#b4ff39] font-bold">$129.00</span>
                                <span className="text-gray-500 text-xs underline cursor-pointer hover:text-white">Remove</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <div className="w-24 h-24 bg-zinc-800 rounded-lg flex-shrink-0"></div>
                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-white font-bold">Asics Metaspeed Sky</h3>
                                <p className="text-gray-400 text-xs">Size: US 9.5 | 5 Days Rental</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#b4ff39] font-bold">$100.00</span>
                                <span className="text-gray-500 text-xs underline cursor-pointer hover:text-white">Remove</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="p-6 border-t border-zinc-800 bg-[#050505]">


                    <div className="border border-[#b4ff39] rounded-xl p-3 flex gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Promo Code"
                            className="bg-transparent text-white outline-none flex-grow px-2 text-sm"
                        />
                        <button className="bg-[#b4ff39] text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-[#9add2d] transition">
                            Apply
                        </button>
                    </div>


                    <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>$229.00</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-zinc-800 mt-2">
                            <span>Grand Total</span>
                            <span>$229.00</span>
                        </div>
                    </div>


                    <button className="w-full bg-[#1db559] hover:bg-[#189b4c] text-white font-bold py-4 rounded-xl transition transform active:scale-95 text-lg">
                        PROCEED TO CHECKOUT
                    </button>
                </div>

            </div>
        </>
    );
}