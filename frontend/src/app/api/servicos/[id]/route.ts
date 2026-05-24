import { services } from "../route";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};


// GET serviço específico
export async function GET(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const service = services.find(
    (service) => service.id === Number(id)
  );

  // Verifica se existe
  if (!service) {

    return Response.json(
      {
        error: "Serviço não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(service);
}


// PUT
export async function PUT(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const body = await request.json();

  const serviceIndex = services.findIndex(
    (service) => service.id === Number(id)
  );

  // Verifica se existe
  if (serviceIndex === -1) {

    return Response.json(
      {
        error: "Serviço não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  // Atualiza serviço
  services[serviceIndex] = {

    ...services[serviceIndex],

    tipo: body.tipo,

    solicitante: body.solicitante,

    cpf: body.cpf,

    descricao: body.descricao,

    status: body.status,

    dataSolicitacao:
      body.dataSolicitacao,

    observacoes:
      body.observacoes,
  };

  return Response.json(
    services[serviceIndex]
  );
}


// DELETE
export async function DELETE(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const serviceIndex = services.findIndex(
    (service) => service.id === Number(id)
  );

  // Verifica se existe
  if (serviceIndex === -1) {

    return Response.json(
      {
        error: "Serviço não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  const deletedService =
    services[serviceIndex];

  // Remove serviço
  services.splice(serviceIndex, 1);

  return Response.json({
    message:
      "Serviço removido com sucesso",

    service: deletedService,
  });
}