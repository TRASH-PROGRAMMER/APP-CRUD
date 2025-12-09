import { Component } from "solid-js";
import Button from "../atoms/Button";

interface ListItemProps {
  text: string;
  onDelete: () => void;
}

const ListItem: Component<ListItemProps> = (props) => {
  return (
    <div
      style={{
        background: "#f8f9fa",
        padding: "15px 20px",
        "border-radius": "10px",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        transition: "transform 0.2s, box-shadow 0.2s",
        "box-shadow": "0 2px 5px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(5px)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
      }}
    >
      <span
        style={{
          "font-size": "1.1rem",
          color: "#333",
          "font-weight": "500",
        }}
      >
        {props.text}
      </span>
      <Button variant="danger" onClick={props.onDelete}>
        🗑️ Eliminar
      </Button>
    </div>
  );
};

export default ListItem;
