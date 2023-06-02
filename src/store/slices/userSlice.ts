import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

const initialState: UserState = {
  uid: '',
  displayName: '',
  photoURL: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    clearUser: state => {
      state.uid = '';
      state.displayName = '';
      state.photoURL = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
