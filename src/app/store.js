
import {configureStore} from '@reduxjs/toolkit'

import dat from './reducers/dataslice'


const store = configureStore({
  reducer: {
    main: dat.dataSlice.reducer,
  }
})

export default store

