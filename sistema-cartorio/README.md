# OrganizaCart

> Sistema administrativo cartorário para gerenciamento de usuários e serviços.

---

## Sobre o Projeto

O **OrganizaCart** é uma aplicação full stack desenvolvida para a administração de cartórios, permitindo o controle completo de usuários e serviços de forma organizada e intuitiva.

O sistema conta com autenticação de usuários, cadastro, edição, exclusão e visualização detalhada de serviços cartoriais, com persistência de dados em banco PostgreSQL via Prisma ORM.

---

## Tecnologias Utilizadas

| Camada | Tecnologias |
|---|---|
| Frontend | React, Next.js, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes, Node.js |
| Banco de Dados | PostgreSQL |
| ORM | Prisma |

---

## Funcionalidades

### Usuários
- Cadastro com nome, e-mail, senha e perfil (Atendente ou Administrador)
- Listagem com nome, e-mail e perfil
- Visualização detalhada
- Edição e exclusão
- Autenticação via login

### Serviços
- Cadastro com tipo, solicitante, CPF, descrição, status, data e observações
- Visualização detalhada
- Edição e exclusão

### Dashboard
- Exibição em tempo real do total de usuários e serviços cadastrados

---

## Estrutura do Projeto

```bash
sistema-cartorio/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── login/
│   │   │   ├── usuarios/
│   │   │   │   └── [id]/
│   │   │   └── servicos/
│   │   │       └── [id]/
│   │   ├── dashboard/
│   │   ├── usuarios/
│   │   │   ├── cadastro/
│   │   │   ├── detalhes/[id]/
│   │   │   └── editar/[id]/
│   │   └── servicos/
│   │       ├── cadastro/
│   │       ├── detalhes/[id]/
│   │       └── editar/[id]/
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── BotoesAcao.tsx
│   │   └── BotaoVoltar.tsx
│   └── lib/
│       └── prisma.ts
├── prisma.config.ts
└── .env
```

---
## Imagens do Projeto

### Tela de Login
<img src="public/login.png" width="800"/>

### Dashboard
<img src="public/dashboard.png" width="800"/>

### Tela de Usuários
<img src="public/usuarios.png" width="800"/>

### Tela de Serviços
<img src="public/servicos.png" width="800"/>

### Tela de Editar Serviços
<img src="public/editarServico.png" width="800"/>

### Tela de Excluir Serviços
<img src="public/excluir.png" width="800"/>

## Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
cd sistema-cartorio
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/cartorio_db"
```

### 4. Execute as migrations do banco de dados

```bash
pnpm prisma migrate dev
```

### 5. Gere o Prisma Client

```bash
pnpm prisma generate
```

### 6. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

---

## Acesso

| Serviço | URL |
|---|---|
| Aplicação | http://localhost:3000 |
| Prisma Studio | `pnpm prisma studio` |

---

## Observações

- Use o `.env.example` como referência para configuração
- O banco de dados PostgreSQL deve ser criado localmente antes de rodar as migrations

---

## Decisões de Design

### Paleta de Cores

O azul foi escolhido como cor principal do OrganizaCart de forma intencional. Cartórios são instituições que lidam com documentos oficiais, autenticações e responsabilidades legais — ambientes que exigem transmitir **confiança, seriedade e credibilidade**.

O azul escuro (`blue-900`) domina a sidebar e os elementos principais, enquanto tons mais claros (`blue-600`, `blue-700`) são usados em botões e destaques, criando uma hierarquia visual clara sem perder a identidade institucional do sistema.

---

## Desafios Futuros

### Deploy em Servidor

Realizar o deploy da aplicação em um ambiente de produção é um passo importante para tornar o sistema acessível remotamente. Isso envolveria:

- Hospedagem do frontend e das API Routes em uma plataforma como **Vercel**
- Provisionamento de um banco PostgreSQL em nuvem, como **Supabase** ou **Railway**
- Configuração de variáveis de ambiente seguras no ambiente de produção
- Garantir que a conexão entre o Prisma e o banco funcione corretamente fora do ambiente local

### Autenticação com JWT

Atualmente o sistema possui uma tela de login, mas sem controle de sessão persistente. Uma evolução natural seria implementar autenticação completa com **JSON Web Tokens (JWT)**, garantindo que apenas usuários autenticados acessem as rotas protegidas.

### Controle de Permissões por Perfil

O sistema já distingue os perfis **Atendente** e **Administrador** no cadastro, mas ainda não aplica restrições de acesso baseadas nesse perfil. Um próximo passo seria limitar o que cada perfil pode visualizar e executar dentro do sistema — por exemplo, apenas Administradores poderiam excluir usuários.

### Testes Automatizados

Implementar testes unitários e de integração para garantir a confiabilidade das funcionalidades à medida que o sistema cresce, utilizando ferramentas como **Jest** e **Testing Library**.

## Desenvolvedor

Desenvolvido por **João Vitor Andrade de Barros**.