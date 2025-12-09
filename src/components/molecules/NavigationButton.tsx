import { Component } from "solid-js";
import { A } from "@solidjs/router";

interface NavigationButtonProps {
  href: string;
  icon: string;
  title: string;
  variant?: "primary" | "secondary";
}

const NavigationButton: Component<NavigationButtonProps> = (props) => {
  const getVariantStyle = () => {
    switch (props.variant) {
      case "primary":
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
          hoverShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
        };
      case "secondary":
        return {
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          boxShadow: "0 4px 15px rgba(240, 147, 251, 0.4)",
          hoverShadow: "0 6px 20px rgba(240, 147, 251, 0.6)",
        };
      default:
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
          hoverShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
        };
    }
  };

  const style = getVariantStyle();

  return (
    <A href={props.href} style={{ "text-decoration": "none" }}>
      <button
        style={{
          background: style.background,
          color: "white",
          border: "none",
          padding: "15px 30px",
          "font-size": "1.1rem",
          "border-radius": "10px",
          cursor: "pointer",
          width: "100%",
          transition: "transform 0.2s, box-shadow 0.2s",
          "box-shadow": style.boxShadow,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = style.hoverShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = style.boxShadow;
        }}
      >
        {props.icon} {props.title}
      </button>
    </A>
  );
};

export default NavigationButton;
