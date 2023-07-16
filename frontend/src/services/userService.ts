import { api } from "./api";

// Get user profile details
const profile = async (token: any) => {
  try {
    const response = await api.get("/user/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

// Update user details
const updateProfile = async (data: any, token: any) => {
  try {
    const response = await api.put("/user", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

// get user details
const getUserDetails = async (id: any) => {
  try {
    const response = await api.get(`/user/${id}`);
    console.log("data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const userService = {
  profile,
  updateProfile,
  getUserDetails,
};
