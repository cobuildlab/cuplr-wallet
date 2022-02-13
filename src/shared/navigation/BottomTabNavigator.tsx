/* eslint-disable indent  */
import React, { ReactElement } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../../modules/dashboard/Dashboard';
import { Transactions } from '../../modules/transactions/Transactions';
import { theme } from '../../constants/theme';

const Bottom = createBottomTabNavigator();

const getIcon =
  (name) =>
  ({ color, ...rest }) =>
    <FontAwesome name={name} color={color} {...rest} />;

export const BottomTab = (): ReactElement => {
  return (
    <Bottom.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.red,
        tabBarInactiveTintColor: theme.gray,
        tabBarStyle: {
          borderColor: theme.lightGray,
        },
      }}>
      <Bottom.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: getIcon('credit-card'),
        }}
      />
      <Bottom.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: getIcon('history'),
        }}
      />
    </Bottom.Navigator>
  );
};
