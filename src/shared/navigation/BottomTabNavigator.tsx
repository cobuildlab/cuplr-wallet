/* eslint-disable indent  */
import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHistory,
  faCreditCard,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import { Dashboard } from '../../modules/dashboard/Dashboard';
import { Send } from '../../modules/send/Send';
import { Transactions } from '../../modules/transactions/Transactions';
import { theme } from '../../constants/theme';

const Bottom = createBottomTabNavigator();

const getIcon = (icon) => ({ color, ...rest }) => (
  <FontAwesomeIcon icon={icon} color={color} {...rest} />
);

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
          tabBarIcon: getIcon(faCreditCard),
        }}
      />
      <Bottom.Screen
        name="Send"
        component={Send}
        options={{
          title: 'Send',
          headerShown: false,
          tabBarIcon: getIcon(faPaperPlane),
        }}
      />
      <Bottom.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: getIcon(faHistory),
        }}
      />
    </Bottom.Navigator>
  );
};
