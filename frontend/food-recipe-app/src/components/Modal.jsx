import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <>
      {/* Dark backdrop */}
      <div
        className="backdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          zIndex: 1001,
          minWidth: "300px",
        }}
      >
        {children}
      </div>
    </>
  );
}
