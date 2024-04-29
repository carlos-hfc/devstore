/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og"
import colors from "tailwindcss/colors"

import { api } from "@/data/api"
import type { Product } from "@/data/types/products"
import { env } from "@/env"

interface ProductPageParams {
  params: {
    slug: string
  }
}

export const runtime = "edge"

export const alt = "devstore"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1h
    },
  })

  const product = await response.json()

  return product
}

export default async function OgImage({ params }: ProductPageParams) {
  const product = await getProduct(params.slug)

  const productImageUrl = new URL(
    product.image,
    env.NEXT_PUBLIC_BASE_URL,
  ).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={productImageUrl}
          alt={alt}
        />
      </div>
    ),
    { ...size },
  )
}
