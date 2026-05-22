import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <main className="flex-1 p-10">

        {/* Mensagem de boas-vindas */}
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

        {/* Informações rápidas */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Usuários */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h2 className="text-xl font-semibold text-slate-600">
              Usuários Cadastrados
            </h2>

            <p className="mt-4 text-5xl font-bold text-blue-700">
              12
            </p>

          </div>

          {/* Serviços */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h2 className="text-xl font-semibold text-slate-600">
              Serviços Cadastrados
            </h2>

            <p className="mt-4 text-5xl font-bold text-green-600">
              34
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}