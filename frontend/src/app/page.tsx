"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const response =
        await fetch(
          "http://localhost:3000/api/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              senha,
            }),
          }
        );

      const data =
        await response.json();

      // Login inválido
      if (!response.ok) {

        alert(data.error);

        return;
      }

      alert(
        "Login realizado com sucesso!"
      );

      console.log(data);

      // Redireciona
      router.push("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Erro no login.");

    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bluBackground.jpg')",
      }}
    >

      <div className="w-full max-w-md rounded-2xl bg-white/90 p-10 shadow-2xl min-h-[400px]">

        <h1 className="mb-6 text-center text-3xl font-bold text-blue-900">
          Sistema Cartorário
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
            className="rounded-lg border p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(event) =>
              setSenha(
                event.target.value
              )
            }
            className="rounded-lg border p-3 outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Entrar
          </button>

          <Link
            href="/usuarios/cadastro"
            className="text-center text-sm text-blue-700 hover:underline"
          >
            Não tem uma conta?
            Cadastre-se
          </Link>

        </form>

      </div>

    </main>
  );
}