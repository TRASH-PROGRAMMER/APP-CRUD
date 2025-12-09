import { Component } from "solid-js";

interface InputProps {
  value: string;
  onInput: (value: string) => void;
  onKeyPress?: (e: KeyboardEvent) => void;
  placeholder?: string;
  type?: string;
}

const Input: Component<InputProps> = (props) => {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onInput={(e) => props.onInput((e.target as HTMLInputElement).value)}
      onKeyPress={props.onKeyPress}
      style={{
        flex: "1",
        "min-width": "200px",
        padding: "12px 20px",
        border: "2px solid #e0e0e0",
        "border-radius": "10px",
        "font-size": "1rem",
        outline: "none",
        transition: "border-color 0.3s",
      }}
    />
  );
};

export default Input;
