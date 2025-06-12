import React, { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto
const AuthContext = createContext();

// Hook para usar o contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Provider do contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Busca dados do sessionStorage ao iniciar
    const name = sessionStorage.getItem("name");
    const token = sessionStorage.getItem("token");
    return name && token ? { name, token } : null;
  });

  // Salva no sessionStorage sempre que user mudar
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("name", user.name);
      sessionStorage.setItem("token", user.token);
    } else {
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("token");
    }
  }, [user]);

  // Função para login
  function login(name, token) {
    setUser({ name, token });
  }

  // Função para logout
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}