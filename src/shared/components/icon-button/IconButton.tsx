import React, { ReactElement } from 'react';
import { Pressable, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.lightGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  button: {
    fontWeight: '600',
    color: theme.gray,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 40,
  },
});

export const IconButton = ({
  icon,
  onPress,
  title,
  style = {},
}): ReactElement => {
  return (
    <Pressable onPress={onPress} style={{ ...styles.pressable, ...style }}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
};
