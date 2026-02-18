import { View , Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function WatchLater() {
    return (
      <SafeAreaView>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Text>Watch Later</Text>
      </View>
      </SafeAreaView>
    )
}