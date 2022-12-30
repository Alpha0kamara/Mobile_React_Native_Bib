import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailPage from "./pages/DetailPage";
import TabNav from "./components/TabNav";

const Stack = createNativeStackNavigator();

const App = () => {
  
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={TabNav} />
                <Stack.Screen name="Detail" component={DetailPage}/>
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;