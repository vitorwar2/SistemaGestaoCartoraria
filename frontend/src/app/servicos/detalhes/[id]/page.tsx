"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import BotaoVoltar from "@/components/BotaoVoltar";

type Service = {
  id: number;
  tipo: string;
  solicitante: string;
  cpf: string;
  descricao: string;
  status: string;
  dataSolicitacao: string;
  observacoes: string;
};

export default function DetalhesServicoPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    async function fetchService() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/servicos/${params.id}`
        );
        const data: Service = await response.json();
        setService(data);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar serviço.");
      }
    }
    fetchService();
  }, [params.id]);

  async function handleDelete() {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este serviço?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/api/servicos/${params.id}`, {
        method: "DELETE",
      });
      alert("Serviço removido com sucesso!");
      router.push("/servicos");
    } catch (error) {
      console.log(error);
      alert("Erro ao remover serviço.");
    }
  }

  if (!service) {
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
            Detalhes do Serviço
          </h1>

          <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Tipo</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.tipo}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Solicitante</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.solicitante}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">CPF</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.cpf}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Descrição</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.descricao}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Status</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.status}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Data da Solicitação</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.dataSolicitacao}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-slate-500">Observações</span>
              <span className="rounded-lg border border-slate-200 p-3 text-slate-800">
                {service.observacoes}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`/servicos/editar/${service.id}`}
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