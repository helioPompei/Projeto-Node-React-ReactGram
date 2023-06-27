import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Função para centralizar a logica de autenticação e deixa la reutilizavel
export const useAuth = () => {
  const { user } = useSelector((store) => store.auth);

  const [auth, setAuth] = useState(false);
  const [loadding, setLoadding] = useState(true);

  useEffect(() => {
    if (user) {
      console.log(user);
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoadding(false);
  }, [user]);

  return { auth, loadding };
};

// Obs: Pode ser usado o auth user do redux para ver se o usuario tá logado ou não
