import { Component } from "solid-js";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface FormInputProps {
  value: string;
  onInput: (value: string) => void;
  onSubmit: () => void;
  placeholder: string;
  buttonText: string;
  variant?: "primary" | "secondary";
}

const FormInput: Component<FormInputProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        "margin-bottom": "30px",
        "flex-wrap": "wrap",
      }}
    >
      <Input
        value={props.value}
        onInput={props.onInput}
        placeholder={props.placeholder}
        onKeyPress={(e) => e.key === "Enter" && props.onSubmit()}
      />
      <Button variant={props.variant || "primary"} onClick={props.onSubmit}>
        {props.buttonText}
      </Button>
    </div>
  );
};

export default FormInput;
