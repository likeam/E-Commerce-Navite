import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
export default function LoginScreen() {
  return (
   <View className=" bg-white mt-[-20px]" >
    <Image source={require('../../assets/logo.jpg')}
      className=" w-full h-[400px] object-cover"
    />
     <View className="p-8 mt-[-40px]">
      <Text className=" text-[30px] font-bold">Community MarketPlace</Text>
      <Text className="text-[18px] text-slate-500 mt-6">Buy Sell MarketPlace where you can sell old item and make real momey</Text>
      <TouchableOpacity className="p-4 bg-blue-500 rounded-full mt-8">
        <Text className="text-white text-center text-[18px] font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
   </View>
  )
}