import Link from 'next/link'

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bluBackground.jpg')",
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-10 shadow-2xl min-h-[400px] ">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-900">
          Sistema Cartorário
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="rounded-lg border p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            className="rounded-lg border p-3 outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Entrar
          </button>

          <Link 
          href= "usuarios/cadastro"
          className="text-center">
            <button
              type="button"
              className="text-center text-sm text-blue-700 hover:underline"
            >
              Não tem uma conta? Cadastre-se
            </button>
            
          </Link>


        </form>
      </div>
    </main>
  );
}