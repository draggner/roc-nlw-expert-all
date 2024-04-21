import { CategoryButton } from "@/components/categoryButton"
import { Header } from "@/components/heading"
import { FlatList, View } from "react-native"

import { CATEGORIES } from "@/utils/data/products"
import { useState } from "react"

export default function Home() {

  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string) {
    //console.log(selectedCategory)
    setCategory(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cardQuantityItems={12} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} isSelected={ item === category } onPress={() => handleCategorySelect(item)} />
        }
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      />
    </View>
  )
}