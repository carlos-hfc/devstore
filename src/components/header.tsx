import { Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white"
        >
          devstore
        </Link>

        <form className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="size-5 text-zinc-500" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            placeholder="Buscar produtos..."
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link
          href="/"
          className="flex items-center gap-2 hover:underline"
        >
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/carlos-hfc.png"
            alt="Pode ser a imagem do usuário da conta"
            className="size-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}
