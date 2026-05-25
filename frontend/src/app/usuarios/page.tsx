"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";

import { useEffect, useState } from "react";

type User = {
  id: number;
  nome: string;
  email: string;
  perfil: string;
};

export default function UsuariosPage() {

  const [users, setUsers] = useState<User[]>([]);

  // Buscar usuários
  useEffect(() => {

    async function fetchUsers() {

      const response = await fetch(
        "http://localhost:3000/api/usuarios",
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();

  }, []);

  // DELETE
  async function handleDelete(id: number) {

    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este usuário?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await fetch(
        `http://localhost:3000/api/usuarios/${id}`,
        {
          method: "DELETE",
        }
      );

      // Remove da tela sem reload
      setUsers(
        users.filter(
          (user) => user.id !== id
        )
      );

      alert("Usuário removido com sucesso!");

    } catch (error) {

      console.log(error);

      alert("Erro ao remover usuário.");

    }
  }

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

                        <Link
                          href={`/usuarios/detalhes/${user.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          Detalhes
                        </Link>

                        <Link
                          href={`/usuarios/editar/${user.id}`}
                          className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
                        >
                          Editar
                        </Link>

                        <button
                          onClick={() => handleDelete(user.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        >
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