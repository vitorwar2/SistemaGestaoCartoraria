"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      alert("Login realizado com sucesso!");
      console.log(data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Erro no login.");
    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bluBackground.jpg')" }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-10 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900">
            OrganizaCart
          </h1>
          <p className="mt-2 text-sm font-medium text-black-500">
            Seu sistema cartorário
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Entrar
          </button>
          <Link
            href="/usuarios/cadastro"
            className="text-center text-sm text-blue-700 hover:underline"
          >
            Não tem uma conta? Cadastre-se
          </Link>
        </form>

      </div>
    </main>
  );
}