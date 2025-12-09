import { Component, JSX } from "solid-js";
import Card from "../atoms/Card";

interface PageLayoutProps {
  children: JSX.Element;
  gradient: string;
}

const PageLayout: Component<PageLayoutProps> = (props) => {
  return (
    <div
      style={{
        "min-height": "100vh",
        background: props.gradient,
        padding: "20px",
        "font-family": "system-ui, -apple-system, sans-serif",
      }}
    >
      <Card>{props.children}</Card>
    </div>
  );
};

export default PageLayout;
