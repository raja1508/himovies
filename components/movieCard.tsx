import { Movie } from "@/types";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";

export default function MovieCard({title, poster_uri}: Movie) {
    return (
        <Link href={"/movies"}>
            <TouchableOpacity>
                <Image source={{
                    uri: poster_uri? `${poster_uri}`: `${poster_uri}`
                }} width={28} height={28}></Image>
                <Text numberOfLines={1}>
                    {title}
                </Text>

            </TouchableOpacity>
        </Link>
    )
}