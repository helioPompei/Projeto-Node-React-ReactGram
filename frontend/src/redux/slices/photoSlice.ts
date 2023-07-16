import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { photoService } from "../../services/photoService";
import { RootState } from "../store";

// InitialState type
type photoSliceType = {
  photos: [] | any;
  photo: any;
  error: any;
  success: boolean;
  loadding: boolean;
  message: string;
};

// Estado inicial do slice
const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loadding: false,
  message: "",
} as photoSliceType;

// Publish user photo Thunk Function
export const publish = createAsyncThunk(
  "photo/publish",
  async (photo: any, thunkAPI) => {

    console.log(photo)
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request
    const response = await photoService.publishPhoto(photo, token);
    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    return response?.data;
  }
);

// Get user photo Thunk Function
export const getUserPhotos = createAsyncThunk(
  "photo/getUserPhotos",
  async (id: any, thunkAPI) => {
    console.log("id",id)

    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    console.log("token",token)
    // Request
    const response = await photoService.getUserPhotos(id, token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log("photos", response);
    return response;
  }
);

// Delete user photo Thunk Function
export const deletePhoto = createAsyncThunk(
  "photo/deletePhoto",
  async (id: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request
    const response = await photoService.deletePhoto(id, token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// Update photo Thunk Function
export const updatePhoto = createAsyncThunk(
  "photo/update",
  async (photoData: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request
    const response = await photoService.updatePhoto(
      { title: photoData.title },
      photoData.id,
      token
    );

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// get photo Thunk Function
export const getPhoto = createAsyncThunk(
  "photo/getPhoto",
  async (id: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request
    const response = await photoService.getPhotoById(id, token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// like photo Thunk Function
export const likePhoto = createAsyncThunk(
  "photo/likePhoto",
  async (id: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    console.log(token);
    console.log(id);
    // Request
    const response = await photoService.photoLike(id, token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log("last", response);
    return response;
  }
);

// add comment photo Thunk Function
export const commentPhoto = createAsyncThunk(
  "photo/commentPhoto",
  async (photoData: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request
    console.log("slice ", photoData);
    const response = await photoService.photoComment(
      photoData.id,
      photoData.comment,
      token
    );

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// get all photos Thunk Function
export const getAllPhotos = createAsyncThunk(
  "photo/getAllPhotos",
  async (_, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request

    const response = await photoService.getPhotos(token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// search photo by title all photos Thunk Function
export const searchPhotos = createAsyncThunk(
  "photo/searchPhotos",
  async (query: any, thunkAPI) => {
    // Get token
    const state: RootState = thunkAPI.getState() as RootState;
    const token = state.auth.user.token;
    // Request

    const response = await photoService.searchPhotos(query, token);

    // check for errors
    // if (response?.data.errors) {
    //   return thunkAPI.rejectWithValue(response.data.errors[0]);
    // }
    console.log(response);
    return response;
  }
);

// Photo Slice
export const photoSlice = createSlice({
  name: "photo",
  initialState: initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publish.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(publish.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photo = action.payload as any;
        state.photos.unshift(state.photo);
        state.message = "Foto publicada com sucesso!";
      })
      .addCase(publish.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload as any;
        state.photo = {};
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photos = action.payload as any;
      })
      .addCase(deletePhoto.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photos = state.photos.filter((photo: any) => {
          return photo._id !== action.payload.id;
        });
        state.message = action.payload.message;
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload as any;
        state.photo = {};
      })
      .addCase(updatePhoto.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;

        state.photos = state.photos.map((photo: any) => {
          if (photo._id === action.payload.photo._id) {
            return (photo.title = action.payload.photo.title);
          }
          return photo;
        });
        state.message = action.payload.message;
      })
      .addCase(updatePhoto.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload as any;
        state.photo = {};
      })
      .addCase(getPhoto.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photo = action.payload as any;
      })
      .addCase(likePhoto.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;

        if (state.photo.likes) {
          state.photo.likes.push(action.payload.userId);
        }

        state.photos.map((photo: any) => {
          if (photo._id === action.payload.photoId) {
            return photo.likes.push(action.payload.userId);
          }
          return photo;
        });

        state.message = action.payload.message;
      })
      .addCase(likePhoto.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload;
      })
      .addCase(commentPhoto.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;

        state.photo.comments.push(action.payload.comment);

        state.message = action.payload.message;
      })
      .addCase(commentPhoto.rejected, (state, action) => {
        state.loadding = false;
        state.error = action.payload;
      })
      .addCase(getAllPhotos.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(getAllPhotos.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photos = action.payload as any;
      })
      .addCase(searchPhotos.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.loadding = false;
        state.success = true;
        state.error = false;
        state.photos = action.payload as any;
      });
  },
});

export const { resetMessage } = photoSlice.actions;
export default photoSlice.reducer;
