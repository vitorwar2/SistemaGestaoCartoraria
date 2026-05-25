"use client";
import BotaoVoltar from "@/components/BotaoVoltar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type User = {
  id: number;
  nome: string;
  email: string;
  perfil: string;
};

export default function EditarUsuarioPage() {

  const params = useParams();

  // Estados
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");

  // Buscar usuário real pelo ID
  useEffect(() => {

    async function fetchUser() {

      try {

        const response = await fetch(
          `http://localhost:3000/api/usuarios/${params.id}`
        );

        const user: User = await response.json();

        setNome(user.nome);
        setEmail(user.email);
        setPerfil(user.perfil);

      } catch (error) {

        console.log(error);

        alert("Erro ao carregar usuário.");

      }
    }

    fetchUser();

  }, [params.id]);

  // Submit
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:3000/api/usuarios/${params.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome,
            email,
            perfil,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Usuário atualizado com sucesso!");

    } catch (error) {

      console.log(error);

      alert("Erro ao atualizar usuário.");

    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
        
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">
          Editar Usuário {nome}
        </h1>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

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
              value={nome}
              onChange={(event) =>
                setNome(event.target.value)
              }
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
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
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
              value={perfil}
              onChange={(event) =>
                setPerfil(event.target.value)
              }
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
        
          <BotaoVoltar />

      </div>

    </main>
  );
}