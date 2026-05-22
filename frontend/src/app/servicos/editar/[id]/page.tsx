import Sidebar from "@/components/Sidebar";

type EditarServicoPageProps = {
  params: {
    id: string;
  };
};

export default async function EditarServicoPage({
  params,
}: EditarServicoPageProps) {

  const service = {
    id: params.id,
    nome: "Autenticação de Documento",
    descricao: "Reconhecimento e autenticação oficial.",
    status: "Concluído",
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <main className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

          {/* Título */}
          <h1 className="mb-8 text-3xl font-bold text-slate-800">
            Editar Serviço #{params.id}
          </h1>

          {/* Formulário */}
          <form className="flex flex-col gap-5">

            {/* Nome */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="nome"
                className="font-medium text-slate-700"
              >
                Nome do Serviço
              </label>

              <select 
             id="tipo de serviço"
             className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
             >
                <option value="">
                  Selecione um tipo de serviço
                </option>
                <option value="Reconhecimento de Firma">
                  Reconhecimento de Firma
                </option>
                
                <option value="Autenticação de Documento">
                  Autenticação de Documento
                </option>
                <option value="Emissão de Certidão">
                  Emissão de Certidão
                </option>
              </select>

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
                defaultValue={service.descricao}
                className="min-h-[120px] rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
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
                defaultValue={service.status}
                className="rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-600"
              >
                <option value="Pendente">
                  Pendente
                </option>

                <option value="Em andamento">
                  Em andamento
                </option>

                <option value="Concluído">
                  Concluído
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

        </div>

      </main>

    </div>
  );
}