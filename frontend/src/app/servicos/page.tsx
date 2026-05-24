"use client";

import { useState } from "react";

import Link from "next/link";

import Sidebar from "@/components/Sidebar";

type Service = {
  id: number;

  nome: string;

  descricao: string;

  status: string;
};

export default function ServicosPage() {

  const [services, setServices] =
    useState<Service[]>([
      {
        id: 1,
        nome: "Autenticação de Documento",
        descricao:
          "Reconhecimento e autenticação oficial.",
        status: "Concluído",
      },

      {
        id: 2,
        nome: "Reconhecimento de Firma",
        descricao:
          "Validação de assinatura.",
        status: "Pendente",
      },

      {
        id: 3,
        nome: "Emissão de Certidão",
        descricao:
          "Solicitação de certidão.",
        status: "Em andamento",
      },
    ]);

  // DELETE
  async function handleDelete(
    id: number
  ) {

    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este serviço?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await fetch(
        `http://localhost:3000/api/servicos/${id}`,
        {
          method: "DELETE",
        }
      );

      // Remove da tela
      setServices(
        services.filter(
          (service) =>
            service.id !== id
        )
      );

      alert(
        "Serviço removido com sucesso!"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Erro ao remover serviço."
      );

    }
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <main className="flex-1 p-8">

        {/* Topo */}
        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-bold text-slate-800">
            Serviços
          </h1>

          <Link
            href="/servicos/cadastro"
            className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
          >
            Novo Serviço
          </Link>

        </div>

        {/* Tabela */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

          <table className="w-full border-collapse">

            <thead className="bg-slate-200">

              <tr>

                <th className="p-4 text-left text-slate-700">
                  Serviço
                </th>

                <th className="p-4 text-left text-slate-700">
                  Descrição
                </th>

                <th className="p-4 text-left text-slate-700">
                  Status
                </th>

                <th className="p-4 text-center text-slate-700">
                  Ações
                </th>

              </tr>

            </thead>

            <tbody>

              {services.map((service) => (

                <tr
                  key={service.id}
                  className="border-t border-slate-200"
                >

                  <td className="p-4">
                    {service.nome}
                  </td>

                  <td className="p-4">
                    {service.descricao}
                  </td>

                  <td className="p-4">
                    {service.status}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/servicos/editar/${service.id}`}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
                      >
                        Editar
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            service.id
                          )
                        }
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