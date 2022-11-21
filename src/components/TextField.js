


//import { useState } from 'react';

import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

function TextField(props) {

  //const [state, setState] = useState('')

  const appState = useSelector(state => state.main)

  const dispatch = useDispatch()

  function handleChange(ev) {
    dispatch( dataSlice.action.setInputFieldValue({newValue: ev.target.value}) )
  }

  const val = appState.inputField

  return (
    <div>
      <textarea spellCheck="false" className="border-2 border-sky-900 rounded-md resize-none
        w-[100%] mt-2 p-2 text-gray-700 h-60"
        value={val}
        onChange={handleChange}
      />
    </div>
  )
}


export default TextField