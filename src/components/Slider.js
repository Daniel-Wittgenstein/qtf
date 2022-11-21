

/* Element where you select the text-transformation to apply.
Basically a list of fancy styled buttons.
*/


import { useState } from 'react';
import Options from './Options.js'
import ActionButton from './ActionButton.js'


import {useDispatch} from 'react-redux'
import dataSlice from "../app/reducers/dataslice"

import { useSelector } from 'react-redux'

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

  function clickGoButton() {
    //test dispatch:
    dispatch( dataSlice.action.testFunction({newValue: "new value"}) )
  }
  
  const [state, setState] = useState(0) //0 = select first entry on app start

  function clickButton(index) {
    props.click(index)
    setState(index)
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

  return (
    <div>
      <div className="p-1 bg-gray-200 w-[100%] max-h-40 overflow-auto">
          {listItems}
      </div>
      <div className="inline-block mt-2">
        {appState.testField}
        <ActionButton click={() => clickGoButton()} text={"Transform text!"} ></ActionButton>
      </div>
      <div className="bg-gray-50 p-3 m-1 mt-3 rounded-md
        shadow-sky-200 shadow-md border-sky-200 border-2 text-gray-800">
        {selectedItem.descr}
      </div>      
      <div className="inline-block">
        <Options list={selectedItem.slots}></Options>
      </div>
    </div>
  )

}

export default Slider