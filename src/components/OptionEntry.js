
//import { useState } from 'react';

import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

function OptionEntry(props) {
  /*

    A generic OptionEntry component.
    
    Includes a label and description, along
    with either a checkbox or a text input.

    These components are auto-generated
    from the immutable data defined in Transformers.js.

    props.text
    props.descr
    props.entryId (id of selected over-action)
    props.selfId (own id, id of this very option)
    props.type: string: "checkbox" for boolean option (checkbox)
      or "input" for string option (text input field)
  */

  const BOOL = "checkbox"
  const TEXT = "input"

  const appState = useSelector(state => state.main)



  const dispatch = useDispatch()

  function onChange(event) {
    let targetValue = null
    if (props.type === BOOL) {
      targetValue = event.currentTarget.checked
    } else if (props.type === TEXT) {
      targetValue = event.currentTarget.value
    }
    dispatch( dataSlice.action.setOptionState({
      entryId: props.entryId,
      optionId: props.selfId,
      newValue: targetValue,
    }) )
  }

  let innerElement = null
  if (props.type === BOOL) {
    const isChecked = appState.options[props.entryId][props.selfId]
    innerElement = (
      <input className="" type="checkbox" checked={isChecked} onChange={onChange}></input>
    )
  } else if (props.type === TEXT) {
    const val = appState.options[props.entryId][props.selfId]
    innerElement = (
      <input className="border-sky-800 border-2 rounded-sm"
      value={val}
      type="textarea" onChange={onChange}></input>
    )
  } else {
    throw new Error(`Illegal type for OptionEntry.`)
  }
  
  return (
    <div className = "flex flex-col">
      <div className="">
        <div className="border-0 mr-2 inline-block">{props.text}:</div>
        <div className="border-0 align-baseline mt-1 inline-block
        ">
          {innerElement}
        </div>
      </div>
      <div className="text-sm text-gray-700">
        {props.descr}
      </div>
    </div>
  )

}


export default OptionEntry