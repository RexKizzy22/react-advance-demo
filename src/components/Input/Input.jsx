import React, { useRef, useImperativeHandle, forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef(
  ({ label, type, isValid, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={type}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={type}
          value={isValid.value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
