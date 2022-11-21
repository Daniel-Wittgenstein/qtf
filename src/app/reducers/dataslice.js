

import { createSlice } from '@reduxjs/toolkit'


// eslint-disable-next-line no-unused-vars
const lodash = require('lodash')


const initialState = {
  appName: "Quick Text Fixer",
  testField: "1234567 initial",
}


const theReducers = {

  testFunction(state, action) {
    const p = action.payload
    state.testField = p.newValue
    console.log(state.testField)
  },
  
}


const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: theReducers,
})


const obj = {
  dataSlice: dataSlice,
  action: dataSlice.actions,
}

export default obj
