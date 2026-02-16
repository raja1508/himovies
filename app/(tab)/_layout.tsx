import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";


export default function _Layout(){
    return (
        <Tabs>
            <Tabs.Screen 
            name="home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="home" size={size} color={color}></AntDesign>
                )
            }}/>
            <Tabs.Screen 
            name="movies"
            options={{
                title: "Movies",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="movie" size={size} color={color} />
                )
            }}/>
            <Tabs.Screen 
            name="download"
            options={{
                title: "Download",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="download" size={size} color={color}></MaterialIcons>
                 )
            }}/>

            <Tabs.Screen 
            name="bookmark"
            options={{
                title: "Bookmark",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="bookmark" size={size} color={color}></MaterialIcons>
                 )
            }}/>
        </Tabs>
    )
}