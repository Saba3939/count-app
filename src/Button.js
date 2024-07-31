import React from "react";

function Button(props) {
  return (
    <button className="btn btn--orange" onClick={props.btn_click}>
      {props.btn_txt}
    </button>
  );
}

export default Button;
