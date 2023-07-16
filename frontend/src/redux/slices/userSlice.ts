import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";
import { RootState } from "../store";

// InitialState type
type UserSliceType = {
  user: {
    profileImage: any;
    email: string;
    name: string;
    bio: string;
    password: string;
  };
  error: boolean;
  success: boolean;
  loadding: boolean;
  message: string;
};

// Estado inicial do slice
const initialState = {
  user: {},
  error: false,
  success: false,
  loadding: false,
  message: "",
} as UserSliceType;

// Profile Thunk Function
export const profile = createAsyncThunk("user/profile", async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState() as RootState;
  const token = state.auth.user.token;

  const response = await userService.profile(token);

  if (response) {
    return response.data;
  }
});

// Profile Thunk Function
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: any, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    try {
      const response = await userService.updateProfile(data, token);
      console.log("esse", response);
      return response;
    } catch (err) {
      console.log("caiu no erro", err);
    }
  }
);

// GetUserDetails Thunk Function
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (id: any) => {
    try {
      console.log(id)
      const response = await userService.getUserDetails(id);
      console.log("esse", response);
      return response;
    } catch (err) {
      console.log("caiu no erro", err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.user = action.payload as any;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.user = action.payload as any;
        state.message = "Usuario atualizado com sucesso";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload as any;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.user = action.payload as any;
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
