import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";


export default function _Layout(){
    return (
        <Tabs screenOptions={
            {
            // Color of active tab label/icon
            tabBarActiveTintColor: '#0000ff90', 
             // tabBarInactiveTintColor: '#CCCCCC'
            }
        }>
            <Tabs.Screen 
            name="home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="home" size={size} color={color}></MaterialIcons>
                )
            }}/>
            <Tabs.Screen 
            name="search"
            options={{
                title: "Search",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="search" size={size} color={color} />
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
            name="watchLater"
            options={{
                title: "Watch Later",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="bookmark" size={size} color={color}></MaterialIcons>
                 )
            }}/>
        </Tabs>
    )
}