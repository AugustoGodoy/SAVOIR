import { Navbar, Logo, Title, Input, Button } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-4">
        <Logo />  
        <Title title="Bem-vindo de volta" />
        <Input label="Email" placeholder="Digite algo..." />
        <Button>Teste</Button>
      </div>
    </>
  )
}

export default App
