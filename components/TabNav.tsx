import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import HomeScreen from "../pages/HomeScreen";
import NewBooks from "../pages/NewBooks";
import Favorite from "../pages/FavoritePage";
import { Book } from "../books";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNav = () => {
  const [favorite, setFavorite] = useState<Book[]>([]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: "black",
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />
      }}>
        {
          () => <HomeScreen favorite={favorite} setFavorite={setFavorite}></HomeScreen>
        }
      </Tab.Screen>
      <Tab.Screen name="New Books" options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: "black",
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color, size }) => <FontAwesome name="archive" size={size} color={color} />
      }}>
        {
          () => <NewBooks favorite={favorite} setFavorite={setFavorite}></NewBooks>
        }

      </Tab.Screen>
      <Tab.Screen name="Favorite" options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: "black",
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color, size }) => <FontAwesome name="star" size={size} color={color} />
      }}>
        {
          () => <Favorite favorite={favorite} setFavorite={setFavorite}></Favorite>
        }
      </Tab.Screen>

    </Tab.Navigator>
  )
}
export default TabNav;