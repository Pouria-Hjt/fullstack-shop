import { ChangableElement } from "@/@types";
import React from "react";

type Props = {
  classes?: string;
  placeholder: string;
  title: string;
  type: string;
} & ChangableElement;

const Input = (props: Props) => {
  return (
    <div>
      <input type={props.type} />
    </div>
  );
};

export default Input;
