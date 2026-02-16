import { useRoute } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    return (
      <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>HiMovies</Text>
        <TextInput placeholder="Search for movies here" 
        onPress={() => {}}
        style={{
          borderRadius: 40,
          padding: 4,
          marginTop: 4
        }}>
        </TextInput>
      </View>
      </SafeAreaView>
    )
}