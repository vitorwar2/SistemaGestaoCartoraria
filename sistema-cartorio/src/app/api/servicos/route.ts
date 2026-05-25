import { prisma } from "@/lib/prisma";

// GET
export async function GET() {
  const servicos = await prisma.servico.findMany();
  return Response.json(servicos);
}

// POST
export async function POST(request: Request) {
  const body = await request.json();

  const novoServico = await prisma.servico.create({
    data: {
      tipo: body.tipo,
      solicitante: body.solicitante,
      cpf: body.cpf,
      descricao: body.descricao,
      status: body.status,
      dataSolicitacao: body.dataSolicitacao,
      observacoes: body.observacoes,
    },
  });

  return Response.json(novoServico, { status: 201 });
}