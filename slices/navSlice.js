import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  source:null,
  destination:null,
  travelTimeInformation:null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
})

export const { setSource, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.source;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;