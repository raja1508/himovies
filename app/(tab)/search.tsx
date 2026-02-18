import MovieCard from "@/components/movieCard";
import { fetchMovies } from "@/fetcher";
import useFetch from "@/useFetch";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<String>("");
  const {data, loading, reset, fetch, error} = 
  useFetch(() => fetchMovies({query: searchTerm.trim()}), false);

   const handleFetchMovies = async () => {
      reset();
      if(!searchTerm) return ;
      console.log(searchTerm.trim());
      await fetch()
    }

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
        <View style={{
          flexDirection: "row",
        }}>
          {/* Search Movies List */}
          <FlatList 
          style={{
            marginTop: 5,
            paddingHorizontal: 10
          }}
          data={data}
          renderItem={item => (
            <MovieCard {...item.item} key={item.item.id}></MovieCard>
          )}
          scrollEnabled={true}
          numColumns={3}
          columnWrapperStyle={{
              gap: 16,
              marginVertical: 8,
          }}
          ListHeaderComponent={
            <>
            <View style={{
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 15
            }}>
                <MaterialIcons name="search" size={22} color={'#17171740'}
                style={{
                  position:"relative",
                  top: 12,
                  left: 30
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
                onChangeText={(text) => {
                  setSearchTerm(text)
                }}
                onSubmitEditing={handleFetchMovies}
                returnKeyType="done"></TextInput>
  
            </View>
            <View style={{
              paddingHorizontal: 16
            }}>

              {!error && data ?( 
                <Text style={{
                color: "#0000ff80",
                fontWeight: 400,
                fontSize: 16,
              }}>Search for: {searchTerm.toUpperCase()}</Text>
            )
              : (
                <Text style={{
                  color: "#ff000080",
                  fontWeight: 400,
                  fontSize: 16,
                }}>No Search found for: {searchTerm.toUpperCase()}</Text>
              )}

            </View>
            </>
          }></FlatList>
      </View>
      </SafeAreaView>
    )
    
}