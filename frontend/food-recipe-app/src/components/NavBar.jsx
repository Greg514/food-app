import React, { useState } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          background: "#eee",
        }}
      >
        <h2>Food Recipe App</h2>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>Home</li>
          <li>My Recipe</li>
          <li>Favorites</li>
          <li>
            <p
              style={{ cursor: "pointer", color: "#ff7a18" }}
              onClick={handleLoginClick}
            >
              Login
            </p>
          </li>
        </ul>
      </header>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  );
}
