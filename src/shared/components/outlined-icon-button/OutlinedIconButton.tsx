import React, { ReactElement } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  outline: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderRadius: 16,
    color: theme.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledOutline: {
    borderColor: theme.gray,
  },
  icon: {
    color: theme.black,
  },
  disabledIcon: {
    color: theme.gray,
  },
});

export const OutlinedIconButton = ({
  onPress,
  icon,
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
      <FontAwesomeIcon icon={icon} style={iconStyle} size={24} />
    </Pressable>
  );
};
