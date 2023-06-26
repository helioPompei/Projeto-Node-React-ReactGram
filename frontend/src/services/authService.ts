import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/user";

export const registerUser = async (data: any) => {
  try {
    const response = await axios.post("/register", data);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export const authService = {
  registerUser,
};
