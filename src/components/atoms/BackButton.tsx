import { Component } from "solid-js";
import { A } from "@solidjs/router";

const BackButton: Component = () => {
  return (
    <A
      href="/"
      style={{
        background: "#f0f0f0",
        border: "none",
        padding: "10px 15px",
        "border-radius": "10px",
        cursor: "pointer",
        "font-size": "1.2rem",
        "text-decoration": "none",
        display: "inline-block",
      }}
    >
      ←
    </A>
  );
};

export default BackButton;
