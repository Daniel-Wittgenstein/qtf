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

console.log(appState)

//DEFINE REDUCERS: (we don't need many reducers, so they are all in one file)
export const store = configureStore({
  reducer: {
    demoReducer: () => {
      return null
    }
  },
});
