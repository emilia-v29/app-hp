import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Lista from '../../screens/explorar/Lista';
import Detalles from '../../screens/explorar/Detalles';

const StackNav = createStackNavigator();

export default function Stack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Detalles') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#2A2A2A',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          display: 'flex',
        },
      });
    }
  }, [navigation, route]);

  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen 
        name="Lista" 
        component={Lista} 
      />
      <StackNav.Screen 
        name="Detalles" 
        component={Detalles} 
      />
    </StackNav.Navigator>
  );
}