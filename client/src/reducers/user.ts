import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userSession {
    email: string;
}

const initialState:userSession = {
    email: ''
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        auth: (state, action: PayloadAction<userSession>) => {
            state.email = action.payload.email;
        },

        logout: (state) => {
            state.email="";
        }
    }
});

export const { auth, logout } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: any): userSession => state.user;