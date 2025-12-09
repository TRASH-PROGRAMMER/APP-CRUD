import { Component, JSX } from "solid-js";

interface ButtonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  children: JSX.Element;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const Button: Component<ButtonProps> = (props) => {
  const getVariantStyle = () => {
    switch (props.variant) {
      case "primary":
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        };
      case "secondary":
        return {
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          boxShadow: "0 4px 15px rgba(240, 147, 251, 0.4)",
        };
      case "danger":
        return {
          background: "#ff4757",
          boxShadow: "0 2px 8px rgba(255, 71, 87, 0.3)",
        };
      default:
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        };
    }
  };

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      style={{
        ...getVariantStyle(),
        color: "white",
        border: "none",
        padding: "12px 30px",
        "border-radius": "10px",
        "font-size": "1rem",
        cursor: "pointer",
        transition: "transform 0.2s",
        width: props.fullWidth ? "100%" : "auto",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      {props.children}
    </button>
  );
};

export default Button;
