import React, { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto
const AuthContext = createContext();

// Hook para usar o contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Provider do contexto
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    // Busca dados do sessionStorage ao iniciar
    const token = sessionStorage.getItem("token");
    return token ? { token } : null;
  });

  // Salva no sessionStorage sempre que user mudar
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  // Função para login
  function login(token) {
    setToken({ token });
  }

  // Função para logout
  function logout() {
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}