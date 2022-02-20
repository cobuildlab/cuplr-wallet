import {
  faCreditCard,
  faHistory,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
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
      <OutlinedIconButton icon={faCreditCard} onPress={() => {}} disabled />
      <OutlinedIconButton icon={faPaperPlane} onPress={() => {}} disabled />
      <OutlinedIconButton icon={faHistory} onPress={onHistory} />
    </View>
  );
};
