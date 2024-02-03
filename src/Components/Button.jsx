import React from 'react';
function Button({
    type="button",
    className="bg-orange-400 ",
    value="button",
    onClick

}) {
    return (
        <button type={type} className={`${className}  border border-solid rounded-lg border-slate-400 h-8 text-center pl-1 pt-1 `} onClick={onClick} >{value}</button>
      );
}

export default Button;