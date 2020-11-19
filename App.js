import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screen/IndexScreen.js";
import EditScreen from "./src/screen/EditScreen.js";
import ShowScreen from "./src/screen/ShowScreen.js";
import CreateScreen from "./src/screen/CreateScreen.js";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
