import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
// import Home from '../screens/Home';
import {RoutesList} from './routes';
// import {publicRoutes} from './publicRoutes';
// import ReduxWrapper from '../utils/ReduxWrapper';
// import TabNavigationStack from './TabNavigationStack';
import { publicRoutes } from './PublicRoutes';
console.log('publicRoutes------>',publicRoutes);

const Stack = createNativeStackNavigator();

function MainStack() {

  return ( 
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
          headerShown: false,
        }}>
        {publicRoutes?.map((route, key) => {
          const {name, component} = route;
          console.log('route--->',name,key,route?.component);
          
          return <Stack.Screen key={key} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default  MainStack