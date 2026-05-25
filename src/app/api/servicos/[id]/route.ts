import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET
export async function GET(request: Request, context: RouteContext) {
  const { id } = await context.params;

  const servico = await prisma.servico.findUnique({
    where: { id: Number(id) },
  });

  if (!servico) {
    return Response.json({ error: "Serviço não encontrado" }, { status: 404 });
  }

  return Response.json(servico);
}

// PUT
export async function PUT(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = await request.json();

  const servico = await prisma.servico.update({
    where: { id: Number(id) },
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

  return Response.json(servico);
}

// DELETE
export async function DELETE(request: Request, context: RouteContext) {
  const { id } = await context.params;

  const servico = await prisma.servico.delete({
    where: { id: Number(id) },
  });

  return Response.json({ message: "Serviço removido com sucesso", servico });
}