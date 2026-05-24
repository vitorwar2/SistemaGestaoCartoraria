export let users = [
  {
    id: 1,
    nome: "João Vitor",
    email: "joao@gmail.com",
    perfil: "Administrador",
    senha: "123456",
  },

  {
    id: 2,
    nome: "Maria",
    email: "maria@gmail.com",
    perfil: "Atendente",
    senha: "654321",
  },
];

//GET
export async function GET() {

  const usersWithoutPassword = users.map((user) => {

    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      perfil: user.perfil,
    };

  });

  return Response.json(usersWithoutPassword);
}

// POST
export async function POST(request: Request) {

  const body = await request.json();

  const newUser = {
    id: users.length + 1,
    nome: body.nome,
    email: body.email,
    perfil: body.perfil,
    senha: body.senha,
  };

  users.push(newUser);

  return Response.json(newUser);
}