import { useRoute } from "@react-navigation/native";
import { View, Text, TextInput, ScrollViewComponent, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MovieCard from "@/components/movieCard";

export default function Home() {
  const movies = [1, 2, 3]
    return (
      <SafeAreaView>
        <ScrollView>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40
          }}
          >
          <View style={{
            flexDirection: 'row'
          }}>
              <Text style={{
                color: '#0000ff90',
                fontSize: 18
              }}>Hi</Text>
              <Text style={{
                color: '#ff000090',
                fontSize: 18
              }}>Movies</Text>
          </View>
          <View style={{
            position: 'relative'
          }}>

              <MaterialIcons name="search" size={22} color={'#17171740'}
              style={{
                position:"absolute",
                top: 10,
                left: 8
              }}></MaterialIcons>
              <TextInput placeholder="Search for movies here"
              style={{
                paddingHorizontal: 33,
                width: 240,
                backgroundColor: "#17171720",
                borderRadius: 20,
                paddingVertical: 8,
                marginTop: 4
              }}></TextInput>

          </View>
        </View>

        <View style={{
          flexDirection: "row",
          gap: 2
        }}>
          <FlatList 
          data={movies}
          renderItem={item => (
            <MovieCard title={"Street Racing"} 
            poster_path={"./assets/images/street_racing.png"}
            id={1} original_language={"en"} popularity={12} overview={""} 
            video={true} vote_average={2} vote_count={2} 
            release_date={"2027"}></MovieCard>
          )}
          scrollEnabled={false}
          style={{
            flexDirection: "row"
          }}></FlatList>
        </View>
    
        </ScrollView>
      </SafeAreaView>

    )
}