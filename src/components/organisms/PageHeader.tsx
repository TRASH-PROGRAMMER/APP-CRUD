import { Component } from "solid-js";
import BackButton from "../atoms/BackButton";

interface PageHeaderProps {
  icon: string;
  title: string;
}

const PageHeader: Component<PageHeaderProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        gap: "10px",
        "margin-bottom": "20px",
      }}
    >
      <BackButton />
      <h1 style={{ color: "#333", margin: "0" }}>
        {props.icon} {props.title}
      </h1>
    </div>
  );
};

export default PageHeader;
