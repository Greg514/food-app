import React, { useState } from "react";
import axios from "axios";


export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? "signup" : "login";

    try {
      const res = await axios.post(`http://localhost:3000/${endpoint}`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setError("");
      if (setIsOpen) setIsOpen(false);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form className="form-container" onSubmit={handleOnSubmit}>
      <h2 className="form-title">{isSignUp ? "Sign Up" : "Login"}</h2>

      <div className="form-control">
        <label>Email</label>
        <input
        className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          
        
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
        className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
         
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="btn-submit">
        {isSignUp ? "Sign Up" : "Login"}
      </button>

      <p className="toggle-text" onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </p>
    </form>
  );
}
