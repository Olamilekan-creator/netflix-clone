import React from "react";

function Button({ text, icon, className, onClick }) {
  return (
    <button
      className={`px-4 py-2 uppercase font-semibold w-fit cursor-pointer ${className}`}
    onClick={onClick}
    >
        {icon && <i class={`fa-solid ${icon} mr-2`}></i>}
      {text}
    </button>
  );
}
export default Button;
