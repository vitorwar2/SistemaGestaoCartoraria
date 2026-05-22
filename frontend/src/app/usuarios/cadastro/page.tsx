export default function CadastroUsuarioPage() {
  return (
    <main 
    className="flex min-h-screen items-center justify-center bg-slate-100 p-6"
    style={{
        backgroundImage: "url('/bluBackground.jpg')",
    }}
    >
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">
          Cadastro de Usuário
        </h1>

        <form className="flex flex-col gap-5">
          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">
              Nome
            </label>

            <input
              type="text"
              placeholder="Digite o nome"
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">
              E-mail
            </label>

            <input
              type="email"
              placeholder="Digite o e-mail"
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          {/* Perfil */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">
              Perfil
            </label>

            <select
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            >
              <option value="">
                Selecione um perfil
              </option>

              <option value="ATENDENTE">
                Atendente
              </option>

              <option value="ADMINISTRADOR">
                Administrador
              </option>
            </select>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite a senha"
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 rounded-lg bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Cadastrar Usuário
          </button>
        </form>
      </div>
    </main>
  );
}