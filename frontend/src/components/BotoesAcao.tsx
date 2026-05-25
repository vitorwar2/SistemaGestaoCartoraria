import Link from "next/link";

type Props = {
  hrefDetalhes: string;
  hrefEditar: string;
  onDelete: () => void;
};

export default function BotoesAcao({
  hrefDetalhes,
  hrefEditar,
  onDelete,
}: Props) {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href={hrefDetalhes}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Detalhes
      </Link>
      <Link
        href={hrefEditar}
        className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
      >
        Editar
      </Link>
      <button
        onClick={onDelete}
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        Excluir
      </button>
    </div>
  );
}