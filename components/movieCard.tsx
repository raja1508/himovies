import { Movie } from "@/types";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({title, poster_path, id, release_date}: Movie) {
    return (
        <Link href={`./movies/${id}`}
        style={{
            backgroundColor: "#17171710",
            borderRadius: 8,
            width: 100,

        }}>
            <TouchableOpacity>
                <Image source={{uri: poster_path?`https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://image.tmdb.org/t/p/w500/8BgIRwt3CesNnN1Rs346Fp3NPNQ.jpg"}} 
                width={100} height={120} 
                style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                }}></Image>
                <View style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                }}>

                    <Text numberOfLines={1}>
                        {title}
                    </Text>
                    <Text>
                        {release_date.split('-').at(0)}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}