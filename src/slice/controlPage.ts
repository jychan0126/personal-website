import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface ControlPageState {
  now: string
}

// Define the initial state using that type
const initialState: ControlPageState = {
  now: ''
}

export const controlPageSlice = createSlice({
  name: 'controlPage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    store: (state, action: PayloadAction<string>) => {
      state.now = action.payload
    }
  }
})

export const { store } = controlPageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectControlPage = (state: RootState) => state.controlPage.now

export default controlPageSlice.reducer