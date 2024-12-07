import React, { useState } from "react";
import Layout from "./Layout";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login functionality
      alert("Logged in successfully!");
    } else {
      // Registration functionality
      alert("Registered successfully!");
    }
  };

  return (
    <Layout>
      <section className="py-16 px-8">
        <div className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8">
            {isLogin ? "Login" : "Register"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-gray-700 font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="text-center mt-6 text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={handleToggle}
              className="text-primary hover:underline focus:outline-none"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AuthPage;
