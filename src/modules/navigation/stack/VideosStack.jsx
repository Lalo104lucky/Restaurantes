import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Videos from '../../videos/Videos';

const Stack = createStackNavigator();

export default function VideosStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Videos'
            component={Videos}
            options={{title: 'Videos'}}
        />

    </Stack.Navigator>
  )
}
