import { ProductProps } from "@/utils/data/products"

import { create } from "zustand"

import * as cartInMemory from "./helpers/cart-in-memory"

export type ProductCardProps = ProductProps & {
  quantify: number
}

type StateProps = {
  products: ProductCardProps[]
  add: (product: ProductProps) =>
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({
    products: cartInMemory.add(state.products, product),
  })),
}))