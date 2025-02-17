import { CategoryButton } from "@/components/categoryButton"
import { Header } from "@/components/heading"

import { Product } from "@/components/product"

import { FlatList, View, SectionList, Text } from "react-native"

import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"
import { useRef, useState } from "react"
import { Link } from "expo-router"

import { useCartStore } from "@/stores/cart-store"

export default function Home() {

  const cartStore = useCartStore()

  const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantify, 0)
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  function handleCategorySelect(selectedCategory: string) {
    
    //console.log(selectedCategory)
    
    setCategory(selectedCategory)
    
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cardQuantityItems={cartQuantityItems} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} isSelected={ item === category } onPress={() => handleCategorySelect(item)} />
        }
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      />
      
      <SectionList
        ref={sectionListRef}
        className="flex-1 p-5"
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => <Text className="text-xl text-white font-heading mt-8 mb-3"> {title} </Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  )
}