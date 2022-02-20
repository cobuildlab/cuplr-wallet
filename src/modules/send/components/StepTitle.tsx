import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  circle: {
    backgroundColor: theme.gray,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  number: {
    color: theme.white,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.gray,
  },
});

export const StepTitle = ({
  number,
  title,
  style = {},
  ...rest
}): ReactElement => {
  return (
    <View style={{ ...styles.container, ...style }} {...rest}>
      <Text style={styles.title}>Step </Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Text style={styles.title}> – {title}</Text>
    </View>
  );
};
