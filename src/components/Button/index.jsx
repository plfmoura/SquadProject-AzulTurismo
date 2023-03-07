import React from "react";
import "./button.css";

export default function Button({ text, type, onPress, id }) {
  return (
    <button class="button-65" role="button" type={type} onClick={onPress} key={id}>
      {text}
    </button>
  );
}
