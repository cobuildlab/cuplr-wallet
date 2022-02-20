import React, { ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

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
