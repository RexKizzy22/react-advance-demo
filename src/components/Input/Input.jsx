import React from "react";

const Input = ({
  label,
  type,
  isValid,
  classes,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={isValid.value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
