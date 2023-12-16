import React from "react";

const InputRegister = (props) => {
  return (
    <div>
      {props.type === "file" && (
        <div className="mt-3 w-full aspect-video rounded-md sm:w-1/2 xl:w-1/3 bg-slate-300">
          {props.preview ? (
            <img src={props.preview} alt="poster" className="w-full" />
          ) : (
            ""
          )}
        </div>
      )}
      <label
        htmlFor={props.name}
        className={`block text-lg mt-6 font-bold leading-6 text-gray-900 ${
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
        {props.elHTML === "input" ? (
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            className={`block w-full rounded-md border-0 py-1.5 ${
              props.preLabel ? "px-9" : "px-3"
            } text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mid-blue sm:text-sm sm:leading-6`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>
              props.type === "file"
                ? props.changeLoadImage(e)
                : props.changeWebinarData(e, props.name)
            }
          />
        ) : (
          <textarea
            name={props.name}
            id={props.name}
            className={`block w-full rounded-md border-0 py-1.5 ${
              props.preLabel ? "px-9" : "px-3"
            } text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mid-blue sm:text-sm sm:leading-6`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>
              props.type === "file"
                ? props.changeLoadImage(e)
                : props.changeWebinarData(e, props.name)
            }
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default InputRegister;
