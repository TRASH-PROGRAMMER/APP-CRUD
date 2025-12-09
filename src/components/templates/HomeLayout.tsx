import { Component, JSX } from "solid-js";

interface HomeLayoutProps {
  children: JSX.Element;
}

const HomeLayout: Component<HomeLayoutProps> = (props) => {
  return (
    <div
      style={{
        "min-height": "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "font-family": "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          "border-radius": "20px",
          padding: "40px",
          "box-shadow": "0 20px 60px rgba(0,0,0,0.3)",
          "text-align": "center",
          "max-width": "500px",
          width: "90%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default HomeLayout;
