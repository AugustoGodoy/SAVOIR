import { Navbar, Logo, Title, Input, Button } from "../components";

export function Login() {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <div className="text-center">
            <Logo />
        </div>

        <div className="pt-6 pb-4">
          <Title title="Faça seu cadastro" />
        </div>

        <form>
          <div className="pb-4">
            <Input label="Email" placeholder="Digite seu email..." type="email" required />
          </div>
          <div className="pb-4">
            <Input label="Senha" placeholder="Digite sua senha..." type="password" required />
          </div>
          
          <div className="text-center pt-4">
            <Button type="submit">Acessar</Button>
          </div>
        </form>

        <div className="text-center pt-8">
          <a href="/cadastro" className="text-blue-600 hover:underline">
            Faça seu cadastro
          </a>
        </div>
      </div>
    </>
  );
}