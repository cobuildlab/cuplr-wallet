import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
  },
});

export const GradientCard = ({
  startColor,
  endColor,
  children,
  ...rest
}): ReactElement => {
  return (
    <LinearGradient
      colors={[startColor, endColor]}
      style={styles.gradient}
      {...rest}>
      {children}
    </LinearGradient>
  );
};
