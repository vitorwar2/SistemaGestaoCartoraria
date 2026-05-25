"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  const [totalUsuarios, setTotalUsuarios] = useState<number | null>(null);
  const [totalServicos, setTotalServicos] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCounts() {
      const [usuariosRes, servicosRes] = await Promise.all([
        fetch("http://localhost:3000/api/usuarios"),
        fetch("http://localhost:3000/api/servicos"),
      ]);

      const usuarios = await usuariosRes.json();
      const servicos = await servicosRes.json();

      setTotalUsuarios(usuarios.length);
      setTotalServicos(servicos.length);
    }

    fetchCounts();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-blue-900">
            Bem-vindo ao OrganizaCart
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Gerencie seu cartório de forma simples, moderna e eficiente.
            Aqui você pode administrar usuários, acompanhar serviços
            cadastrados e organizar todas as operações do sistema
            em um único lugar.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-600">
              Usuários Cadastrados
            </h2>
            <p className="mt-4 text-5xl font-bold text-blue-700">
              {totalUsuarios ?? "..."}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-600">
              Serviços Cadastrados
            </h2>
            <p className="mt-4 text-5xl font-bold text-green-600">
              {totalServicos ?? "..."}
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}