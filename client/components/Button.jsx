import React from "react";

export default function Button(props) {
  return <button onClick={props.buttonClick}>Button {props.name}</button>;
}
