import React, { useState } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const checkLogin = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header>
        <h2>Food recipe app</h2>

        <ul>
          <li>Home</li>
          <li>My Recipe</li>
          <li>Favorites</li>
          <li onClick={checkLogin}>Login</li>
        </ul>
      </header>

      {isOpen && <Modal onClose={() => setIsOpen(false)}><InputForm/></Modal>}
    </>
  );
}
