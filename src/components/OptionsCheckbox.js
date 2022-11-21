
import { useState } from 'react';



function OptionsCheckbox(props) {
  /*
    props.checked: boolean
    props.onChangeCallBack: function
  */

  function onChange() {
    props.onChangeCallback()
  }

  return (
    <div className = "flex flex-col">
      <div className="">
        <div className="border-0 mr-2 inline-block">{props.text}:</div>
        <div className="border-0 align-baseline mt-1 inline-block
        "><input className="" type="checkbox" checked={props.checked}
          onChange={onChange}></input></div>
      </div>
      <div className="text-sm text-gray-700">
        {props.descr}
      </div>
    </div>
  )

}


export default OptionsCheckbox