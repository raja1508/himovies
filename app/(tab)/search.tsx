import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
    return (
      <SafeAreaView>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Text>Search</Text>
      </View>
      </SafeAreaView>
    )
    
}