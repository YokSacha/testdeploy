import React from "react";
import ActionButton from "../componente/ActionButton";

function Login({ setPage }) {
    return (
        <div className="max-w-md mx-auto py-20 px-4">
            <div className="bg-[#12121a] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">Login</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-left mt-5 text-sm text-gray-400 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-[#0a0a0f] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full bg-[#0a0a0f] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                            placeholder="Enter your password"
                        />
                    </div>
                    <ActionButton text="Sign In" />
                </form>
                <div className="mt-6 flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-400">
                        Don't have an account?
                        <button onClick={() => setPage('signup')} className="text-blue-500 cursor-pointer hover:underline">Sign up</button>
                    </p>
                    <button onClick={() => setPage('home')} className="text-gray-500 hover:text-white text-sm transition-all mt-2 underline">
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;