import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import InicioScreen from '../screens/inicio/InicioScreen';
import StackNavigator from './stack/Stack';
import CasasScreen from '../screens/casas/CasasScreen';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#2A2A2A',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#D3A625',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tab.Screen
        name="InicioTab"
        component={InicioScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🏰</Text>,
        }}
      />
      <Tab.Screen
        name="ExplorarTab"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📜</Text>,
        }}
      />
      <Tab.Screen
        name="CasasTab"
        component={CasasScreen}
        options={{
          tabBarLabel: 'Casas',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🛡️️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}