


//import { useState } from 'react';

import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

function TextField(props) {

  //const [state, setState] = useState('')

  const demoText = `Welcome to Quick Text Fixer!\nEnter your text here!`
    

  const appState = useSelector(state => state.main)

  const dispatch = useDispatch()

  function handleChange(ev) {
    dispatch( dataSlice.action.setInputFieldValue({newValue: ev.target.value}) )
  }

  const val = appState.inputField

  return (
    <div>
      <textarea spellCheck="false" className="border-2 border-sky-900 rounded-md resize-none
        w-[100%] mt-2 p-2 text-gray-900 h-60"
        value={val}
        placeholder={demoText}
        onChange={handleChange}
      />
    </div>
  )
}


export default TextField