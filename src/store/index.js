import { createSlice, configureStore } from "@reduxjs/toolkit";

 const initialState = { showForm: false};

 const showFormSlice = createSlice({
   name: "showform",
   initialState,
   reducers: {
     showForm(state) {
       state.showForm = true;
     },
     hideForm(state) {
      state.showForm = false;
    },
  },
 });

 const store = configureStore({
     reducer: showFormSlice.reducer
 });
 export const showFormActions = showFormSlice.actions
 export default store;


// const parkingReducer = (state = firstState, action) => {
//   if (action.type === 'SHOW') {
//     return {
//       showForm: !state.showForm,
//     };
//   }
//   return state
// };

