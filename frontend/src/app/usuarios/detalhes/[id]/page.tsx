"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import BotaoVoltar from "@/components/BotaoVoltar";

type User = {
  id: number;
  nome: string;
  email: string;
  perfil: string;
};

export default function DetalhesUsuarioPage() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/usuarios/${params.id}`
        );
        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar usuário.");
      }
    }
    fetchUser();
  }, [params.id]);

  async function handleDelete() {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este usuário?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/api/usuarios/${params.id}`, {
        method: "DELETE",
      });
      alert("Usuário removido com sucesso!");
      router.push("/usuarios");
    } catch (error) {
      console.log(error);
      alert("Erro ao remover usuário.");
    }
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-slate-500">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">

          <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">
            Detalhes do Usuário
          </h1>

          <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Nome</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {user.nome}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">E-mail</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {user.email}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Perfil</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {user.perfil}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`/usuarios/editar/${user.id}`}
                className="mt-4 w-full rounded-lg bg-blue-700 p-3 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Editar
              </Link>
              <button
                onClick={handleDelete}
                className="w-full rounded-lg bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
              >
                Excluir
              </button>
              <BotaoVoltar />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}