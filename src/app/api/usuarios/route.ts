import { prisma } from "@/lib/prisma";


// GET
export async function GET() {

  const users =
    await prisma.user.findMany();

  // Remove senha
  const usersWithoutPassword =
    users.map(
      ({ senha, ...user }) => user
    );

  return Response.json(
    usersWithoutPassword
  );
}

// POST
export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const newUser =
    await prisma.user.create({
      data: {
        nome: body.nome,
        email: body.email,
        senha: body.senha,
        perfil: body.perfil,
      },
    });

  // Remove senha
  const {
    senha,
    ...userWithoutPassword
  } = newUser;

  return Response.json(
    userWithoutPassword,
    {
      status: 201,
    }
  );
}