-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "solicitante" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataSolicitacao" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);
