import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './MainTab';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#D3A625',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#1A1A1A',
            width: 240,
          },
          drawerActiveTintColor: '#D3A625',
          drawerInactiveTintColor: '#A0A0A0',
        }}
      >
        <Drawer.Screen 
          name="InicioDrawer" 
          component={MainTab} 
          options={{ title: 'Inicio' }}
          initialParams={{ screen: 'InicioTab' }}
        />
        <Drawer.Screen 
          name="ExplorarDrawer" 
          component={MainTab} 
          options={{ title: 'Explorar' }}
          initialParams={{ screen: 'ExplorarTab' }}
        />
        <Drawer.Screen 
          name="CasasDrawer" 
          component={MainTab} 
          options={{ title: 'Casas' }}
          initialParams={{ screen: 'CasasTab' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}