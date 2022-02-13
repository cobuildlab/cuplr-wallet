import React, { ReactElement } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  outline: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledOutline: {
    borderColor: theme.gray,
  },
  icon: {
    fontSize: 32,
  },
  disabledIcon: {
    color: theme.gray,
  },
});

export const OutlinedIconButton = ({
  onPress,
  name,
  disabled = false,
}): ReactElement => {
  let outlineStyles = { ...styles.outline };
  let iconStyle = { ...styles.icon };

  if (disabled) {
    outlineStyles = { ...outlineStyles, ...styles.disabledOutline };
    iconStyle = { ...iconStyle, ...styles.disabledIcon };
  }

  return (
    <Pressable style={outlineStyles} onPress={onPress} disabled={disabled}>
      <FontAwesome name={name} style={iconStyle} />
    </Pressable>
  );
};
