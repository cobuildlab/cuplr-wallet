import React, { ReactElement } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    padding: 16,
    borderWidth: 2,
    color: theme.black,
    borderColor: theme.black,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  inputDisabled: {
    borderColor: theme.gray,
  },
});

export const OutlinedInput = ({
  style = {},
  disabled,
  ...rest
}): ReactElement => {
  let inputStyles = styles.input;

  if (disabled) {
    inputStyles = { ...inputStyles, ...styles.inputDisabled };
  }

  inputStyles = { ...inputStyles, ...style };

  return (
    <TextInput
      style={inputStyles}
      placeholderTextColor={theme.gray}
      editable={!disabled}
      {...rest}
    />
  );
};
