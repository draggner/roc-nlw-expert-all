
import { ProductProps } from "@/utils/data/products";
import { ProductCardProps } from "../cart-store";

export function add(products: ProductCardProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id)

  if (existingProduct) {
    return products.map((product) => product.id === existingProduct.id ? { ...product, quantity: product.quantify + 1}: product)
  }

  return [...products, {...newProduct, quantify: 1}]
}