import { configureStore } from '@reduxjs/toolkit';

import Transformers from "../Transformers.js"

//SETUP APP STATE:
const appState = {
  options: {},
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
      const data = {}
      if (slot.type === "checkbox") {
        data.checked = slot.checked
      } else if (slot.type === "input") {
        data.value = ""
      }
      option[slot.key] = data
    }
  }
  return options
}


//DEFINE REDUCERS: (we don't need many reducers, so they are all in one file)
export const store = configureStore({
  preloadedState: appState,
  reducer: {
    demoReducer: (state, action) => {
      console.log(3883838, state, action)
      return state
    },

    setOptionState: (state, action) => {
      /* 
        1. transformerKey: key of Transformer text effect: string
        2. optionKey: key of option: string
        3. newValue: boolean for checkboxes, string for (text) inputs
      */
      console.log(7, state, action)
      const p = action.payload
      state.options[p.transformerKey][p.optionKey] = p.newValue
      return state
    },

  },
});
