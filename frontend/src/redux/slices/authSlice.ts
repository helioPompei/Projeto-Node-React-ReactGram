import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

const user = localStorage.getItem("user");

// Estado inicial do slice
const initialState = {
  user: user ? JSON.parse(user) : null,
  error: false,
  success: false,
  loadding: false,
};

// Register Thunk Function
export const register = createAsyncThunk(
  "auth/register",
  async (user, action) => {
    const response = await authService.registerUser(user);
    // check for errors
    console.log(response);
    if (response.data.errors) {
      return action.rejectWithValue(response.data.errors[0]);
    }
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loadding = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.user = action.payload as any;
      })
      .addCase(register.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload as any;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
