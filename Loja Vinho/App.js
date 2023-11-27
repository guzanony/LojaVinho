const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/home";
import Perfil from "./screens/Perfil";
import ErrorNaCompra from "./screens/ErrorNaCompra";
import CompraFeita from "./screens/CompraFeita";
import Cadastro from "./screens/Cadastro";
import CheckOut from "./screens/Checkout";
import TelaCarrinho from "./screens/TelaCarrinho";
import TelaDescrio from "./screens/TelaDescrio";
import TelaProdutos from "./screens/TelaProdutos";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    LobsterTwo: require("./assets/fonts/LobsterTwo.ttf"),
    "Agbalumo-Regular": require("./assets/fonts/Agbalumo-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ErrorNaCompra"
              component={ErrorNaCompra}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompraFeita"
              component={CompraFeita}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckOut"
              component={CheckOut}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaCarrinho"
              component={TelaCarrinho}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaDescrio"
              component={TelaDescrio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaProdutos"
              component={TelaProdutos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
