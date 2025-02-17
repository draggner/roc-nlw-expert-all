import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
  quantify?: number
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {
  
  return (
    <TouchableOpacity {...rest}
      ref={ref}
      className="w-full flex-row items-center pb-4">
      
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
      
      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>

          {data.quantify && (
            <Text className="text-slate-400 font-subtitle text-sm">
            x {data.quantify}
            </Text>
          )}
        </View>        
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      
      </View>
    </TouchableOpacity>
  )
})
