
import { useState } from 'react';

import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

function OptionsCheckbox(props) {
  /*
    props.text
    props.descr
    props.entryId (id of selected over-action)
    props.selfId (own id, id of this very option)
  */

  const appState = useSelector(state => state.main)

  const isChecked = appState.options[props.entryId][props.selfId]

  const dispatch = useDispatch()

  function onChange(event) {
    const nv = event.currentTarget.checked
    dispatch( dataSlice.action.setOptionState({
      entryId: props.entryId,
      optionId: props.selfId,
      newValue: nv,
    }) )
  }

  return (
    <div className = "flex flex-col">
      <div className="">
        <div className="border-0 mr-2 inline-block">{props.text}:</div>
        <div className="border-0 align-baseline mt-1 inline-block
        "><input className="" type="checkbox" checked={isChecked}
          onChange={onChange}></input></div>
      </div>
      <div className="text-sm text-gray-700">
        {props.descr}
      </div>
    </div>
  )

}


export default OptionsCheckbox