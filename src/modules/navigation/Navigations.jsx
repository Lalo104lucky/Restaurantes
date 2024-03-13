import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AuthStack from './stack/AuthStack';
import FavoritesStack from './stack/FavoritesStack';
import HomeStack from './stack/HomeStack';
import {Icon} from '@rneui/base';
import VideosStack from './stack/VideosStack';
import PushNotification from '../notifications/PushNotification';


const Tab = createBottomTabNavigator();

export default function Navigations(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    const { iconName, iconType } = getIconName(route.name, focused);
                    // Retornar un Icon de React Native Elements
                    return <Icon name={iconName} type={iconType} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                  headerShown: false,
                })}
            >
            <Tab.Screen 
                name='HomeStack'
                component={HomeStack}
                options={{title: 'Inicio'}}
                />
                <Tab.Screen
                name='VideosStack'
                component={VideosStack}
                options={{title: 'Videos'}}
                />
                <Tab.Screen 
                name='FavoritesStack'
                component={FavoritesStack}
                options={{title: 'Favoritos'}}
                />
                <Tab.Screen 
                name='AuthStack' 
                component={AuthStack}
                options={{title: 'Cuenta'}}
                />
                <Tab.Screen 
                name='Notification' 
                component={PushNotification}
                options={{title: 'Notificaciones'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
    
}

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';
  
    switch (routeName) {
      case 'HomeStack':
        iconName = focused ? 'home' : 'home-outline';
        break;
        case 'VideosStack':
          iconName = focused ? 'filmstrip-box' : 'filmstrip-box-multiple'
          break;
      case 'FavoritesStack':
        iconName = focused ? 'heart' : 'heart-outline';
        break;
        case 'AuthStack':
        iconName = focused ? 'account' : 'account-outline';
        break;
        case 'Notification':
        iconName = focused ? 'pen' : 'pencil-outline';
        break;
    }
  
    return { iconName, iconType };
  };

