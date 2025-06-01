import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {

    const [token, setToken] = useState(null);
  chrome.runtime.onMessage.addListener((message) => {
    if (message.token) {
      setToken(message.token);
      console.log('Token received in panel:', message.token);
    }
  });
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl border border-indigo-100 rounded-2xl px-8 py-10 w-11/12 max-w-sm text-center animate-fade-in-up">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Welcome to <span className="text-indigo-700">ReachWise</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Get started to access your personalized chatbot assistant inside your browser!
        </p>
        <button
          onClick={onLogin}
          className="bg-gradient-to-r  from-purple-500 to-fuchsia-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all  gap-2"
        >
          
          Let’s Get Started {token}
        </button>
      </div>
    </div>
  );
}
