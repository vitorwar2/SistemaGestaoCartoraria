import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

// GET usuário por id
export async function GET(
  request: Request,
  context: RouteContext
) {

  const { id } =
    await context.params;

  const user =
    await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!user) {

    return Response.json(
      {
        error:
          "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }

  // Remove senha
  const {
    senha,
    ...userWithoutPassword
  } = user;

  return Response.json(
    userWithoutPassword
  );
}

// PUT
export async function PUT(
  request: Request,
  context: RouteContext
) {

  const { id } =
    await context.params;

  const body =
    await request.json();

  try {

    const updatedUser =
      await prisma.user.update({
        where: {
          id: Number(id),
        },

        data: {
          nome: body.nome,
          email: body.email,
          perfil: body.perfil,
        },
      });

    const {
      senha,
      ...userWithoutPassword
    } = updatedUser;

    return Response.json(
      userWithoutPassword
    );

  } catch {

    return Response.json(
      {
        error:
          "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }
}

// DELETE
export async function DELETE(
  request: Request,
  context: RouteContext
) {

  const { id } =
    await context.params;

  try {

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return Response.json({
      message:
        "Usuário removido com sucesso",
    });

  } catch {

    return Response.json(
      {
        error:
          "Usuário não encontrado",
      },
      {
        status: 404,
      }
    );
  }
}