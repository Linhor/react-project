import React from 'react';
import Style from "./button.css";
function Button({name, click}) {

return(
  <button onClick={click}>{name}</button>
  )
}

export default Button;