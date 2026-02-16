import { Movie } from "@/types";
import { Link } from "expo-router";
// import street_racing from "../assets/images/street_racing.png"
import { Image, Text, TouchableOpacity } from "react-native";

export default function MovieCard({title, poster_path, id}: Movie) {
    return (
        <Link href={`./movies/${id}`}>
            <TouchableOpacity>
                <Image source={{uri:"/assets/images/street_racing.png"}} 
                width={28} height={28}></Image>
                <Text numberOfLines={1}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}