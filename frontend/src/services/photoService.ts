import { api } from "./api";

// publish an user photo
const publishPhoto = async (data: any, token: any) => {
  try {
    const response = await api.post("/photo", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err: any) {
    return err.response;
  }
};

// get user photos
const getUserPhotos = async (id: any, token: any) => {
  try {
    const response = await api.get(`/photo/user/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// delete user photos
const deletePhoto = async (id: any, token: any) => {
  try {
    const response = await api.delete(`/photo/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// update user photo
const updatePhoto = async (data: any, id: any, token: any) => {
  try {
    const response = await api.put(`/photo/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// get photo
const getPhotoById = async (id: any, token: any) => {
  try {
    const response = await api.get(`/photo/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Like photo
const photoLike = async (id: any, token: any) => {
  console.log("id", id);
  console.log("token", token);
  try {
    const response = await api.post(`/photo/like/${id}`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Comment photo
const photoComment = async (id: any, data: any, token: any) => {
  console.log("SERVICE", typeof data);
  const DatatoSend = { comment: data };
  try {
    const response = await api.post(`/photo/comment/${id}`, DatatoSend, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Get all photos
const getPhotos = async (token: any) => {
  try {
    const response = await api.get(`/photo`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Search all photos
const searchPhotos = async (query: any, token: any) => {
  try {
    const response = await api.get(`/photo/search?q=${query}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhotoById,
  photoLike,
  photoComment,
  getPhotos,
  searchPhotos,
};
