import { Label, Select } from "flowbite-react";
import React from "react";

const SelectRegister = (props) => {
  return (
    <div className="max-w-md mt-6">
      <div className="mb-2 block">
        <Label
          htmlFor={props.title}
          className="block text-lg font-bold leading-6 text-gray-900"
        />
      </div>
      <Select
        id={props.title}
        value={props.value}
        onChange={(e) => props.changeWebinarData(e, props.name)}
        required
      >
        {props.options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Select>
    </div>
  );
};

export default SelectRegister;
