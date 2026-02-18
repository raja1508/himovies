import { useRoute } from "@react-navigation/native";
import { View, Text, TextInput, ScrollViewComponent, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MovieCard from "@/components/movieCard";
import useFetch from "@/useFetch";
import { fetchMovies } from "@/fetcher";
import { Movie } from "@/types";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const {data, error, loading, fetch} = useFetch<Movie[]>(() => fetchMovies({query: ""}), true);
  // const [searchTerm, setSearchTerm] = useState(); 
  // console.log(loading);
  const router = useRouter()




  if(loading){
    return (
      <ActivityIndicator size="large" color="#0000ff70"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
      }}></ActivityIndicator>
    )
  }


    return (
      <SafeAreaView>
        <ScrollView>
        {/* Header */}
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
                fontSize: 24,
                fontWeight: 600
              }}>Hi</Text>
              <Text style={{
                color: '#ff000090',
                fontSize: 24,
                fontWeight: 600
              }}>Movies</Text>
          </View>

          {/* Search Bar */}
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
              }}
              onFocus={() => router.push("/(tab)/search")}
              ></TextInput>

          </View>
        </View>

        <View style={{
          flexDirection: "row",
          gap: 2
        }}>

          {/* Movies List */}
          <FlatList 
          style={{
            marginTop: 20,
            paddingHorizontal: 10
          }}
          data={data}
          renderItem={item => (
            <MovieCard {...item.item} key={item.item.id}></MovieCard>
          )}
          scrollEnabled={false}
          numColumns={3}
          columnWrapperStyle={{
              gap: 16,
              marginVertical: 8,
          }}
          ></FlatList>
        </View>
    
        </ScrollView>
      </SafeAreaView>

    )
}