import { useState, useEffect } from 'react'
import '../App.css'
import Chatbot from './components/Chatbot';
import LoginPage from './components/LoginPage';
import Loader from './components/Loader';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
    setCheckingAuth(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("user", "kiran");
    setIsLoggedIn(true);
  };

  if (checkingAuth) return <Loader />;

  return isLoggedIn ? <Chatbot /> : <LoginPage onLogin={handleLogin} />;
}