import type { Metadata } from "next"
import Image from "next/image"

import { config } from "@/app/metadata"
import { api } from "@/data/api"
import type { Product } from "@/data/types/products"

interface ProductPageParams {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1h
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    ...config,
    title: product.title,
    description: product.description,
  }
}

export async function generateStaticParams() {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1h
    },
  })

  const products = (await response.json()) as Product[]

  return products.map(product => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageParams) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-app grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              P
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              M
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              G
            </button>
          </div>
        </div>

        <button className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
