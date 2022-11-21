

/* Main Element. */


import { useState } from 'react';
import Options from './Options.js'
import ActionButton from './ActionButton.js'

import { useEffect } from "react";

import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

import Transformers from '../Transformers'

function Slider(props) {
  /*
    #######
    props.list: an array.
      must contain objects of the form:
      {
        text: string: button text,
        tooltip: string: tooltip text
        key: string: unique id
        ...
      }
    #######
    props.click: function: gets called whenever a button is clicked,
      passes index of the button (index inside the props.list array)
    #######
    
  */

  const appState = useSelector(state => state.main)

  const dispatch = useDispatch()

  function doTextTransformation(text, transformer) {
    const optionDataObj = appState.options[transformer.key]
    const result = transformer.do(text, optionDataObj)
    if (!result) throw new Error(`${transformer.key}: do function did not return a result`)
    return result
  }

  function clickGoButton() {
    const text = appState.inputField
    const selectedTransformer = Transformers[state]
    const result = doTextTransformation(text, selectedTransformer)
    dispatch( dataSlice.action.setInputFieldValue({
      newValue: result.result,
    }))
  }
  
  function clickUndoButton() {
    dispatch( dataSlice.action.undo())
  }

  const [state, setState] = useState(0) //0 = select first entry on app start

  function clickButton(index) {
    props.click(index)
    setState(index)
    const selectedItem = props.list[index]
    const text1 = selectedItem.example || ""
    const title = selectedItem.text
    const text2 = doTextTransformation(text1, selectedItem).result
    dispatch( dataSlice.action.setSideBar({
      title,
      text1,
      text2,
    }) )
  }

  const standardStyle = `p-3 bg-white   text-sky-800 m-1 hover:bg-gray-700 hover:text-gray-50`
  const selectedStyle = `p-3 bg-sky-600 text-white   m-1 hover:bg-sky-800 hover: text-gray-100`

  const listItems = props.list.map( (item, index) => {
      const cl =  index === state ? " " + selectedStyle : standardStyle
      return (<button
        className={cl}
        title={item.tooltip} key={item.key} onClick={() => clickButton(index)}>{item.text}</button>)
    }
  )

  const selectedItem = props.list[state]

  const undoEnabled = appState.undoPossible

  const undoButton = undoEnabled? (<ActionButton click={() => clickUndoButton()} text={"undo"} ></ActionButton>) : null


  //call only once on mount:
  useEffect(() => {
    clickButton(0)
  }, [])

  return (
    <div>
      <div className="p-1 bg-gray-200 w-[100%] max-h-40 overflow-auto">
          {listItems}
      </div>
      <div className="inline-block mt-2">
        <ActionButton click={() => clickGoButton()} text={"Transform text!"} ></ActionButton>
        {undoButton}
      </div>
      <div className="bg-gray-50 p-3 m-1 mt-3 rounded-md
        shadow-sky-200 shadow-md border-sky-200 border-2 text-gray-800">
        {selectedItem.descr}
      </div>      
      <div className="inline-block">
        <Options list={selectedItem.slots} entryId={selectedItem.key}></Options>
      </div>
    </div>
  )

}

export default Slider