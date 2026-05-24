"use client";

import { useState } from "react";

export default function CadastroUsuarioPage() {

  // Estados
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [senha, setSenha] = useState("");

  // Submit
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:3000/api/usuarios",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },   

          body: JSON.stringify({
            nome,
            email,
            perfil,
            senha,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Usuário cadastrado com sucesso!");

      // Limpar formulário
      setNome("");
      setEmail("");
      setPerfil("");
      setSenha("");

    } catch (error) {

      console.log(error);

      alert("Erro ao cadastrar usuário.");

    }
  }

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
              placeholder="Digite o nome"
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
              placeholder="Digite o e-mail"
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

            <label
              htmlFor="senha"
              className="font-medium text-slate-700"
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite a senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
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