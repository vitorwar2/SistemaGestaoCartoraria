export type Service = {
  id: number;

  tipo: string;

  solicitante: string;

  cpf: string;

  descricao: string;

  status: string;

  dataSolicitacao: string;

  observacoes: string;
};


// Banco fake
export let services: Service[] = [

  {
    id: 1,

    tipo: "Autenticação",

    solicitante: "João Vitor",

    cpf: "123.456.789-00",

    descricao:
      "Autenticação de documentos pessoais.",

    status: "Em andamento",

    dataSolicitacao: "2026-05-24",

    observacoes:
      "Cliente solicitou urgência.",
  },

  {
    id: 2,

    tipo: "Reconhecimento de Firma",

    solicitante: "Maria Silva",

    cpf: "987.654.321-00",

    descricao:
      "Reconhecimento de assinatura.",

    status: "Aguardando",

    dataSolicitacao: "2026-05-20",

    observacoes:
      "Aguardando documentação.",
  },
];


// GET
export async function GET() {

  return Response.json(services);

}


// POST
export async function POST(
  request: Request
) {

  const body = await request.json();

  const newService: Service = {

    id: services.length + 1,

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

  services.push(newService);

  return Response.json(newService);
}