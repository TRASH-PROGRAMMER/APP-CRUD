import { Component, JSX } from "solid-js";

interface CardProps {
  children: JSX.Element;
  maxWidth?: string;
}

const Card: Component<CardProps> = (props) => {
  return (
    <div
      style={{
        "max-width": props.maxWidth || "800px",
        margin: "0 auto",
        background: "white",
        "border-radius": "20px",
        padding: "30px",
        "box-shadow": "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
