"use client";

import { useRouter } from "next/navigation";

export default function BotaoVoltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 w-full rounded-lg bg-slate-200 p-3 font-semibold text-slate-700 transition hover:bg-slate-300"
    >
      ← Voltar
    </button>
  );
}