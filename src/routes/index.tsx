import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar as páginas
import Home from '../pages/Home';
import DetalhesHome from '../pages/DetalhesHome';
import WishList from '../pages/WishList';
import CriarWishList from '../pages/CriarWishList';
import DetalhesWishList from '../pages/DetalhesWishList';
import Criar from '../pages/Criar';

export type RootStackParamList = {
  Home: undefined;
  DetalhesHome: {}; // Coloque os params corretos se necessário
  WishList: undefined;
  CriarWishList: undefined;
  DetalhesWishList: {
    title: string;
    year: string;
  };
  Criar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetalhesHome" component={DetalhesHome} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="CriarWishList" component={CriarWishList} />
      <Stack.Screen name="DetalhesWishList" component={DetalhesWishList} />
      <Stack.Screen name="Criar" component={Criar} />
    </Stack.Navigator>
  );
}
