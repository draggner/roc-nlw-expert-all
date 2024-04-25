import { View, Text, ScrollView, Alert, Linking } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Feather } from "@expo/vector-icons"

import { formatCurrency } from "@/utils/functions/format-currency";

import { Product } from "@/components/product";
import { Header } from "@/components/heading";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { ProductCardProps, useCartStore } from "@/stores/cart-store";
import { LinkButton } from "@/components/linkButton";
import { useState } from "react";
import { useNavigation } from "expo-router";



export default function Cart() {
  const [address, setAddress] = useState("")
  const cartStore = useCartStore()
  const total = formatCurrency(cartStore.products.reduce(
    (total, product) => total + product.price * product.quantify, 0
  ))

  const navigation = useNavigation()
  const PHONE_NUMBER = "558499" //Informar o número do estabelecimento

  function handleProductRemove(product: ProductCardProps) {
    Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        onPress: () => cartStore.remove(product.id)
      },
    ])
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert("Pedido", "Informe os dados da entrega.")
    }

    const products = cartStore.products.map(
      (product) => `\n ${product.quantify} ${product.title}`
    ).join("")
    //console.log(products)

    const message = `
      NOVO PEDIDO
      \n Entregar em: ${address}
      ${products}
      $\n Valor Total ${total}
    `
    //console.log(message)

    Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)

    cartStore.clear()
    navigation.goBack()
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          {cartStore.products.length > 0 ? (        
            <View className="p-5 flex-1">
              {
                cartStore.products.map((product) => (
                  <Product key={product.id} data={product} onPress={() => handleProductRemove(product)} />
                ))
              }
            </View>
          ) : (
            <Text className="font-body text-slate-400 text-center my-8">
              Seu carrinho está vazio.
            </Text>
          )}
          <View className="flex-row gap-2 items-center mt-5 mb-4">
            <Text className="text-white text-xl font-subtitle">
              Total:
            </Text>
            <Text className="text-lime-400 text-2xl font-heading">
              {total}
            </Text>
          </View>
          <Input placeholder="Informe o endereço de entrega com Rua, Bairro, CEP, Número e Complemento..." onChangeText={setAddress}
            blurOnSubmit={true}
            onSubmitEditing={handleOrder}
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}