type EditarUsuarioPageProps = {
  params: {
    id: string;
  };
};

export default async function EditarUsuarioPage({
  params,
}: EditarUsuarioPageProps) {

  const user = {
    id: params.id,
    nome: "João Vitor",
    email: "joao@gmail.com",
    perfil: "Administrador",
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">
          Editar Usuário #{params.id}
        </h1>

        <form className="flex flex-col gap-5">

          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="font-medium text-slate-700"
            >
              Nome
            </label>

            <input
              id="nome"
              type="text"
              defaultValue={user.nome}
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-slate-700"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              defaultValue={user.email}
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          {/* Perfil */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="perfil"
              className="font-medium text-slate-700"
            >
              Perfil
            </label>

            <select
              id="perfil"
              defaultValue={user.perfil}
              className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            >
              <option value="Administrador">
                Administrador
              </option>

              <option value="Atendente">
                Atendente
              </option>
            </select>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 rounded-lg bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Salvar Alterações
          </button>

        </form>
      </div>
    </main>
  );
}