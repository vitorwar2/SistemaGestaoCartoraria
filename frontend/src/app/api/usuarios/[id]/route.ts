import { users } from "../route";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};


// GET usuário específico
export async function GET(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {

    return Response.json(
      { 
        error: "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  const { senha, ...userWithoutPassword } = user;

  return Response.json(userWithoutPassword);
}



// PUT
export async function PUT(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const body = await request.json();

  const userIndex = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (userIndex === -1) {

    return Response.json(
      {
        error: "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  users[userIndex] = {
    ...users[userIndex],

    nome: body.nome,

    email: body.email,

    perfil: body.perfil,
  };

  return Response.json(users[userIndex]);
}


// DELETE
export async function DELETE(
  request: Request,
  context: RouteContext
) {

  const { id } = await context.params;

  const userIndex = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (userIndex === -1) {

    return Response.json(
      {
        error: "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  const deletedUser = users[userIndex];

  users.splice(userIndex, 1);

  return Response.json({
    message: "Usuário removido com sucesso",
    user: deletedUser,
  });
}