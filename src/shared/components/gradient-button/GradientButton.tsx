import React, { ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
  },
  button: {
    fontWeight: '600',
    color: theme.white,
    textAlign: 'center',
    fontSize: 16,
  },
});

export const GradientButton = ({ onPress, title }): ReactElement => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={[theme.orange, theme.red]}
      style={styles.gradient}>
      <Pressable onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};
