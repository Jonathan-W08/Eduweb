import React from "react";

const InputRegister = (props) => {
  return (
    <div className="mt-6">
      {props.type === "image" && (
        <div className="mt-3 w-full aspect-video rounded-md sm:w-1/2 xl:w-1/3 bg-slate-300">
          {/* <img
              src="./public/img/webinar.jpg"
              alt="poster"
              className="w-full opacity-0"
            /> */}
        </div>
      )}
      <label
        htmlFor={props.name}
        className={`block text-lg font-bold leading-6 text-gray-900 ${
          props.type === "image" ? "mt-6" : false
        }`}
      >
        {props.title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {props.preLabel && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{props.preLabel}</span>
          </div>
        )}
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          className={`block w-full rounded-md border-0 py-1.5 ${
            props.preLabel ? "px-9" : "px-3"
          } text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mid-blue sm:text-sm sm:leading-6`}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.changeWebinarData(e, props.name)}
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default InputRegister;
