import { api } from "./api";

//Função de registro de usuario
export const registerUser = async (data: any) => {
  try {
    const response = await api.post("/user/register", data);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
  } catch (err: any) {
    return err.response;
  }
};

//Função de Login de usuario
const loginUser = async (data: any) => {
  try {
    const response = await api.post("/user/login", data);
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
