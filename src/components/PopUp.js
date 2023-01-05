


import ActionButton from "./ActionButton.js"

import { useState } from 'react';



function PopUp(props) {
  /* 
    props.text: string: window text
    props.buttonText: okay button text
    fixed inset-0 bg-red-400 z-40 overflow-hidden opacity-25
      flex content-center justify-center
  */


  const [hidden, setHidden] = useState(false)


  function hide() {
    setHidden(true)
  }

  const el =
    hidden ?
    null :
    (
      <div className="pop-up-wrapper">
        <div className="pop-up p-6">
          <div className="p-8 text-gray-800 overflow-scroll max-h-48 bg-gray-200 rounded">
            {props.text}
          </div>
          <div className="flex content-center justify-center mt-6">
            <ActionButton click={() => hide()} text={props.buttonText} ></ActionButton>
          </div>
        </div>
      </div>
    )


  return (el)
}

export default PopUp