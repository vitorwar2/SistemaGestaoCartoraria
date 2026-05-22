import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const users = [
  {
    id: 1,
    nome: "João Vitor",
    email: "joao@gmail.com",
    perfil: "Administrador",
  },

  {
    id: 2,
    nome: "Maria Silva",
    email: "maria@gmail.com",
    perfil: "Atendente",
  },

  {
    id: 3,
    nome: "Pedro Santos",
    email: "pedro@gmail.com",
    perfil: "Atendente",
  },
  {
    id: 4,
    nome: "Ana Paula",
    email: "ana@gmail.com",
    perfil: "Atendente",
  }
];

export default function UsuariosPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
      {/* Topo */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">
          Usuários
        </h1>

        <Link
          href="/usuarios/cadastro"
          className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
        >
          Novo Usuário
        </Link>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-4 text-left text-slate-700">
                Nome
              </th>

              <th className="p-4 text-left text-slate-700">
                E-mail
              </th>

              <th className="p-4 text-left text-slate-700">
                Perfil
              </th>

              <th className="p-4 text-center text-slate-700">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-slate-200"
              >
                <td className="p-4">
                  {user.nome}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.perfil}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
                      Editar
                    </button>

                    <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    </div>
  );
}