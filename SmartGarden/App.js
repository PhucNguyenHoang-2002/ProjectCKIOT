// App.js (hoặc index.js)
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Views/Home";
import Garden1 from "./Views/Garden1";
import Garden2 from "./Views/Garden2";
import InforDevice from "./Views/InforDevice";
import AboutUs from "./Views/AboutUs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Garden1" component={Garden1} />

        <Stack.Screen name="Garden2" component={Garden2} />

        <Stack.Screen name="InforDevice" component={InforDevice} />

        <Stack.Screen name="AboutUs" component={AboutUs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
