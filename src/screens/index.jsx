import React, { memo, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '../Route';

import HomeScreen from './HomeScreen';
import EventPage from './EventPage';

const Stack = createStackNavigator();

const Routes = () => {
  const currentRoute = useMemo(() => navigationRef?.current?.getCurrentRoute().name, []);
  console.log(currentRoute);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventPage" component={EventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Routes);
