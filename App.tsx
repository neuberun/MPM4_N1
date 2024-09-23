import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./src/components/Header";
import Cadastro from "./src/screens/Cadastro";
import Lista from "./src/screens/Lista";
import EditFornecedor from "./src/screens/EditFornecedor";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cadastro"
        screenOptions={{
          header: () => <Header />,
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ title: "Lista de Fornecedores" }}
        />
        <Stack.Screen
          name="EditFornecedor"
          component={EditFornecedor}
          options={{ title: "Editar Fornecedor" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
