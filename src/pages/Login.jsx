import React, { useState } from "react";
import { Navbar, Logo, Title, Input, Button } from "../components";
import { signIn } from "../services/authService";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      const data = await signIn(email, senha);
      // Salve o token na store centralizada aqui
      console.log("Token:", data.token);
      // Redirecione ou atualize o estado do app conforme necessário
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <div className="text-center">
          <Logo />
        </div>

        <div className="pt-6 pb-4">
          <Title title="Faça seu cadastro" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="pb-4">
            <Input
              label="Email"
              placeholder="Digite seu email..."
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <Input
              label="Senha"
              placeholder="Digite sua senha..."
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <div className="text-center pt-4">
            <Button type="submit">Acessar</Button>
          </div>
        </form>

        <div className="text-center pt-8">
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Faça seu cadastro
          </Link>
        </div>
      </div>
    </>
  );
}