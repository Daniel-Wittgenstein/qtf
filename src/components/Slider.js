

/* Main Element. */


import { useState } from 'react';
import Options from './Options.js'
import ActionButton from './ActionButton.js'
import PopUp from './PopUp.js'

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
    const separator = "***"
    const textTotal = selectedItem.example || separator
    const parts = textTotal.split(separator)
    const title = selectedItem.text
    //const text2 = doTextTransformation(text1, selectedItem).result

    dispatch( dataSlice.action.setSideBar({
      title,
      text1: parts[0],
      text2: parts[1],
    }) )
  }

 /* const standardStyle = `p-3 bg-white   text-sky-800 m-1 hover:bg-gray-700 hover:text-gray-50 rounded-t-lg
    border-2 border-gray-500`
  const selectedStyle = `p-3 bg-gray-400 text-white   m-1  cursor-default rounded-t-lg`*/

  const standardStyle = "nice-tab"
  const selectedStyle = "nice-tab nice-tab-selected"

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

  const goText = selectedItem.text + "!"

  const popUpText = (
    <>
      <ul className="list-disc text-gray-700">
        <li>Quick Text Fixer is a tool that lets you fix your texts. Remove
          duplicate lines, sort lines alphabetically, remove duplicate spaces etc.</li>
        <li>Runs entirely client-side.</li>
        <li>Built with React, Redux and Tailwind.css</li>
        <li>Just click on the blue button "remove duplicate lines!" to see it in action.</li>
        <li>Have fun!</li>
        <li>© Daniel Ott 2023</li>
      </ul>
    </>
  )


  const popUpButtonText = "okay"

  //call only once on mount:
  useEffect(() => {
    clickButton(0)
  }, [])

  return (
    <div>
      <div>
        <div className="p-1 pb-0 w-[100%] max-h-40 overflow-auto bg-sky-400
          rounded-br-2xl select-none pb-2">
            {listItems}
        </div>

        <div className="pl-4">
          <div className="bg-white p-3 m-1 mt-4 mb-3 rounded-md
            shadow-md border-2 p-2 rounded-md text-gray-800">
            {selectedItem.descr}
          </div>  
          
          <div className="inline-block mt-2">
            <ActionButton click={() => clickGoButton()} text={goText} ></ActionButton>
            {undoButton}
          </div>    
          
          <div className="block">
            <Options list={selectedItem.slots} entryId={selectedItem.key}></Options>
          </div>
        </div>

      </div>

      <PopUp text={popUpText} buttonText={popUpButtonText}></PopUp>
    </div>
  )

}

export default Slider