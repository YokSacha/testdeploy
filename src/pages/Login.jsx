import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ActionButton from "../components/ActionButton";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/api/users/login",
                {
                    email: email,
                    password: password
                },
                { withCredentials: true }
            );

            console.log("Login response:", response.data);
            alert("Login Successfully!");
            navigate("/userdashboard");

        } catch (error) {
            // Show ALL error details
            console.log("Full error:", error);
            console.log("Error response:", error.response);

            const message = error.response?.data?.message
                || error.message
                || "Login Failed";

            alert(message);
        }
    };

    return (
        <div className="max-w-md mx-auto py-20 px-4">
            <div className="bg-[#12121a] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">Login</h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-left mt-5 text-sm text-gray-400 mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#0a0a0f] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0a0a0f] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <ActionButton text="Sign In" />
                </form>
                <div className="mt-6 flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-400">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-500 cursor-pointer hover:underline">Sign up</Link>
                    </p>
                    <Link to="/" className="text-gray-500 hover:text-white text-sm transition-all mt-2 underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;