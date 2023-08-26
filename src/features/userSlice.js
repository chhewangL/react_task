import { createSlice } from "@reduxjs/toolkit";
import { getUser, setUser } from "./localStorage";




const initialState = {
  users: getUser()
}


const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      setUser(state.users);
      console.log(state.users);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      setUser(state.users);


    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUser(state.users);

    }



  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer