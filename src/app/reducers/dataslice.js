

import { createSlice } from '@reduxjs/toolkit'

import Transformers from "../../Transformers.js"

// eslint-disable-next-line no-unused-vars
const lodash = require('lodash')

const demoText = `Welcome to Quick Text Fixer! Enter your text here!`

//SETUP INITIAL APP STATE:
const appState = {
  appName: "Quick Text Fixer",
  testField: "1234567 initial",
  options: {},
  inputField: demoText,
}

appState.options = setOptionsInitialState()

function setOptionsInitialState() {
  /* Creates data depending on whether checkboxes should be checked or not at the beginning;
    depends on text effect and option. Retrieved from Transformers data.
    Unlike the Transformers data, this will be mutable (not really mutable,
    only mutated via Redux, so still immutable). */
  const options = {}
  for ( const key of Object.keys(Transformers) ) {
    const transformer = Transformers[key]
    const option = {}
    options[transformer.key] = option
    for (const slot of transformer.slots) {
      let data
      if (slot.type === "checkbox") {
        data = slot.checked
      } else if (slot.type === "input") {
        data = ""
      }
      option[slot.key] = data
    }
  }
  return options
}


//DEFINE THE REDUCERS:
const theReducers = {

  testFunction(state, action) {
    const p = action.payload
    state.testField = p.newValue
  },

  setOptionState(state, action) {
    /*
      entryId: string
      optionId: string
      newValue: boolean or string (bool for checkboxes, string for text inputs)
    */
    const p = action.payload
    state.options[p.entryId][p.optionId]= p.newValue
  },

  setInputFieldValue(state, action) {
    const p = action.payload
    state.inputField = action.newValue
  },
  
}



//AND FINALLY, SETUP THE REST:
const dataSlice = createSlice({
  name: 'data',
  initialState: appState,
  reducers: theReducers,
})


const obj = {
  dataSlice: dataSlice,
  action: dataSlice.actions,
}

export default obj
