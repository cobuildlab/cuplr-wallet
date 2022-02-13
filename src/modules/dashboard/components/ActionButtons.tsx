import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { OutlinedIconButton } from '../../../shared/components/outlined-icon-button/OutlinedIconButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 32,
  },
});

export const ActionButtons = ({ onHistory }): ReactElement => {
  return (
    <View style={styles.container}>
      <OutlinedIconButton name="credit-card" onPress={() => {}} disabled />
      <OutlinedIconButton name="send" onPress={() => {}} disabled />
      <OutlinedIconButton name="history" onPress={onHistory} />
    </View>
  );
};
