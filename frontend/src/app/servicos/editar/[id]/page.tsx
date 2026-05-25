"use client";

import BotaoVoltar from "@/components/BotaoVoltar";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import Sidebar from "@/components/Sidebar";

export default function EditarServicoPage() {

  const params = useParams();

  // Estados
  const [tipo, setTipo] = useState("");

  const [solicitante, setSolicitante] =
    useState("");

  const [cpf, setCpf] = useState("");

  const [descricao, setDescricao] =
    useState("");

  const [status, setStatus] = useState("");

  const [dataSolicitacao, setDataSolicitacao] =
    useState("");

  const [observacoes, setObservacoes] =
    useState("");

  // Buscar serviço
  useEffect(() => {

    async function fetchService() {

      try {

        const response = await fetch(
          `http://localhost:3000/api/servicos/${params.id}`
        );

        const data = await response.json();

        setTipo(data.tipo || "");

        setSolicitante(
          data.solicitante || ""
        );

        setCpf(data.cpf || "");

        setDescricao(
          data.descricao || ""
        );

        setStatus(data.status || "");

        setDataSolicitacao(
          data.dataSolicitacao || ""
        );

        setObservacoes(
          data.observacoes || ""
        );

      } catch (error) {

        console.log(error);

        alert("Erro ao carregar serviço.");

      }
    }

    fetchService();

  }, [params.id]);

  // Submit
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:3000/api/servicos/${params.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            tipo,
            solicitante,
            cpf,
            descricao,
            status,
            dataSolicitacao,
            observacoes,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Serviço atualizado com sucesso!");

    } catch (error) {

      console.log(error);

      alert("Erro ao atualizar serviço.");

    }
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <main className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

          {/* Título */}
          <h1 className="mb-8 text-3xl font-bold text-slate-800">
            Editar Serviço # {tipo} - {solicitante}
          </h1>

          {/* Formulário */}
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >

            {/* Tipo */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="tipo"
                className="font-medium text-slate-700"
              >
                Tipo de Serviço
              </label>

              <select
                id="tipo"
                value={tipo}
                onChange={(event) =>
                  setTipo(event.target.value)
                }
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              >

                <option value="">
                  Selecione um tipo de serviço
                </option>

                <option value="Certidão de Nascimento">
                  Certidão de Nascimento
                </option>

                <option value="Reconhecimento de Firma">
                  Reconhecimento de Firma
                </option>

                <option value="Autenticação">
                  Autenticação
                </option>

                <option value="Escritura">
                  Escritura
                </option>

                <option value="Outro">
                  Outro
                </option>

              </select>

            </div>

            {/* Solicitante */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="solicitante"
                className="font-medium text-slate-700"
              >
                Nome do Solicitante
              </label>

              <input
                id="solicitante"
                type="text"
                value={solicitante}
                onChange={(event) =>
                  setSolicitante(
                    event.target.value
                  )
                }
                placeholder="Digite o nome do solicitante"
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              />

            </div>

            {/* CPF */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="cpf"
                className="font-medium text-slate-700"
              >
                CPF do Solicitante
              </label>

              <input
                id="cpf"
                type="text"
                value={cpf}
                onChange={(event) =>
                  setCpf(event.target.value)
                }
                placeholder="Digite o CPF"
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              />

            </div>

            {/* Descrição */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="descricao"
                className="font-medium text-slate-700"
              >
                Descrição
              </label>

              <textarea
                id="descricao"
                value={descricao}
                onChange={(event) =>
                  setDescricao(
                    event.target.value
                  )
                }
                placeholder="Digite a descrição do serviço"
                className="min-h-[120px] rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              />

            </div>

            {/* Observações */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="observacoes"
                className="font-medium text-slate-700"
              >
                Observações
              </label>

              <textarea
                id="observacoes"
                value={observacoes}
                onChange={(event) =>
                  setObservacoes(
                    event.target.value
                  )
                }
                placeholder="Digite observações adicionais"
                className="min-h-[100px] rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              />

            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="status"
                className="font-medium text-slate-700"
              >
                Status
              </label>

              <select
                id="status"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value)
                }
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              >

                <option value="">
                  Selecione um status
                </option>

                <option value="Aguardando">
                  Aguardando
                </option>

                <option value="Em andamento">
                  Em andamento
                </option>

                <option value="Concluído">
                  Concluído
                </option>

              </select>

            </div>

            {/* Data */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="data"
                className="font-medium text-slate-700"
              >
                Data da Solicitação
              </label>

              <input
                id="data"
                type="date"
                value={dataSolicitacao}
                onChange={(event) =>
                  setDataSolicitacao(
                    event.target.value
                  )
                }
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              />

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

    </div>
  );
}