"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  function getLinkClass(path: string) {

    const isActive =
      pathname === path;

    return `
      rounded-lg px-4 py-3 transition
      ${
        isActive
          ? "bg-blue-700"
          : "hover:bg-blue-800"
      }
    `;
  }

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-blue-900 p-6 text-white">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-2xl font-bold">
          OrganizaCart
        </h1>

        <p className="text-sm text-blue-200">
          Sistema Administrativo
        </p>

      </div>

      {/* Navegação */}
      <nav className="flex flex-col gap-3">

        <Link
          href="/dashboard"
          className={getLinkClass(
            "/dashboard"
          )}
        >
          Dashboard 
        </Link>

        <Link
          href="/usuarios"
          className={getLinkClass(
            "/usuarios"
          )}
        >
          Usuários
        </Link>

        <Link
          href="/servicos"
          className={getLinkClass(
            "/servicos"
          )}
        >
          Serviços
        </Link>

      </nav>

      {/* Logout */}
      <div className="mt-auto">

        <Link
          href="/"
          className="block w-full rounded-lg bg-red-600 p-3 text-center font-medium text-white transition hover:bg-red-700"
        >
          Sair
        </Link>

      </div>

    </aside>
  );
}