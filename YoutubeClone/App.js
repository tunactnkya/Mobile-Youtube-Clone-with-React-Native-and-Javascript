import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./src/screens/Search";
import HomeScreen from "./src/screens/Home";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Suscribe from "./src/screens/Suscribe";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white"
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red"
  }
}



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


const RootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          } else if (route.name === 'suscribe')
            iconName = 'subscriptions'
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: colors.tabIcon,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="home" component={HomeScreen} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="suscribe" component={Suscribe} />
    </Tabs.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer theme={customDefaultTheme}  >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;