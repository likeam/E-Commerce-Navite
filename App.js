import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-red-800">Hello Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
