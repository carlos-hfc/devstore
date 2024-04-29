"use client"

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import type { FormEvent } from "react"

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get("q") ?? ""

  function handleSearch(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const data = Object.fromEntries(formData)

    const query = String(data.q)

    if (!query.trim()) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="size-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        placeholder="Buscar produtos..."
        required
      />
    </form>
  )
}
