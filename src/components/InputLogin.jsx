import React from "react";

import { Label, TextInput } from "flowbite-react";

const InputLogin = (props) => {
  return (
    <div className="mt-6">
      <div className="block">
        <Label htmlFor={props.id} value={props.title} />
      </div>
      <TextInput
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default InputLogin;
