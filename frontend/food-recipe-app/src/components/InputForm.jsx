import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isSignUp ? "signup" : "login";

    try {
      const response = await axios.post(
        `http://localhost:4000/${endpoint}`,
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setIsOpen();
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <button type="submit">
        {isSignUp ? "Sign Up" : "Login"}
      </button>

      {error && <h6 className="error">{error}</h6>}

      <p onClick={() => setIsSignUp((previous) => !previous)}>
        {isSignUp ? "Already have an account" : "Create new account"}
      </p>
    </form>
  );
}
