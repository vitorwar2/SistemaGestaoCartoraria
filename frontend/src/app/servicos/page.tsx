"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

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

export default function ServicosPage() {

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const response = await fetch("http://localhost:3000/api/servicos");
      const data = await response.json();
      setServices(data);
    }
    fetchServices();
  }, []);

  // DELETE
  async function handleDelete(id: number) {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este serviço?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await fetch(`http://localhost:3000/api/servicos/${id}`, {
        method: "DELETE",
      });

      setServices(services.filter((service) => service.id !== id));
      alert("Serviço removido com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao remover serviço.");
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-800">Serviços</h1>
          <Link
            href="/servicos/cadastro"
            className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
          >
            Novo Serviço
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-slate-200">
              <tr>
                <th className="p-4 text-left text-slate-700">Serviço</th>
                <th className="p-4 text-left text-slate-700">Descrição</th>
                <th className="p-4 text-left text-slate-700">Status</th>
                <th className="p-4 text-center text-slate-700">Ações</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-t border-slate-200">
                  <td className="p-4">{service.tipo}</td>
                  <td className="p-4">{service.descricao}</td>
                  <td className="p-4">{service.status}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/servicos/detalhes/${service.id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        Detalhes
                      </Link>

                      <Link
                        href={`/servicos/editar/${service.id}`}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
                      >
                        Editar
                      </Link>

                      <button
                        onClick={() => handleDelete(service.id)}
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