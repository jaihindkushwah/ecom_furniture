import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import Home from 'screens/Home';
import Chat from 'screens/Chat';
import Profile from 'screens/Profile';
import Cart from 'screens/Cart';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import SeeAll from 'screens/SeeAll';
import Messages from 'screens/Messages';
import WishScreen from 'screens/WishScreen';
import SingleProduct from 'screens/SingleProduct';
import {View} from 'react-native';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="main"
        options={{headerShown: false}}
        component={RootNavigationBottomTab}
      />
      <Stack.Screen
        name="SeeAll"
        options={{headerTitle: 'Find all'}}
        component={SeeAll}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
        initialParams={{id: 42}}
      />
      <Stack.Screen
        name="Product"
        options={{
          headerShown: false,
        }}
        component={SingleProduct}
        initialParams={{id: 42}}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
export function RootNavigationBottomTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#d9a411', // Set active color to orange
        tabBarInactiveTintColor: '#919190', // Optional: set inactive color
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          // backgroundColor: 'transparent',
          // position: 'absolute',
          // elevation: 0,
          borderTopWidth: 0,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={Messages}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#279cf5',
          tabBarBadge: 3,
          tabBarBackground: () => (
            <View style={{flex: 1, backgroundColor: '#1B202D'}} />
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="message-processing"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="wishList"
        component={WishScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#279cf5',
          tabBarBackground: () => (
            <View style={{flex: 1, backgroundColor: '#1B202D'}} />
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
