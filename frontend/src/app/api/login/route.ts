import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const user =
    await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

  // Usuário não existe
  if (!user) {

    return Response.json(
      {
        error:
          "E-mail ou senha inválidos",
      },
      {
        status: 401,
      }
    );
  }

  // Verifica senha
  if (user.senha !== body.senha) {

    return Response.json(
      {
        error:
          "E-mail ou senha inválidos",
      },
      {
        status: 401,
      }
    );
  }

  // Remove senha
  const {
    senha,
    ...userWithoutPassword
  } = user;

  return Response.json(
    {
      message:
        "Login realizado com sucesso",

      user: userWithoutPassword,
    }
  );
}