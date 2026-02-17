import { View , Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bookmark() {
    return (
      <SafeAreaView>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Text>Download</Text>
      </View>
      </SafeAreaView>
    )
}