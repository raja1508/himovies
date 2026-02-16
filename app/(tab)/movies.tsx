import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Movies() {
    return (
      <SafeAreaView>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Text>Movies</Text>
      </View>
      </SafeAreaView>
    )
    
}