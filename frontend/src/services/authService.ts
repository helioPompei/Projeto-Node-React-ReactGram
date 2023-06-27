import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/user";

//Função de registro de usuario
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

const loginUser = async (data: any) => {
  try {
    const response = await axios.post("/login", data);
    console.log(response);

    if (response) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
  } catch (err: any) {
    return err.response;
  }
};

// Funcão de logout do usuario
const logoutUser = () => {
  localStorage.removeItem("user");
};

export const authService = {
  registerUser,
  loginUser,
  logoutUser,
};
