import type { NextRequest } from "next/server"
import { z } from "zod"

import data from "../data.json"

interface ProductRequest {
  params: {
    slug: string
  }
}

export async function GET(_: NextRequest, { params }: ProductRequest) {
  await new Promise(resolve => setTimeout(resolve, 5000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find(product => product.slug === slug)

  if (!product) {
    return Response.json({ message: "Product not found." }, { status: 404 })
  }

  return Response.json(product)
}
