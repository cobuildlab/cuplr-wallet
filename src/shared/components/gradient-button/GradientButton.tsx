import React, { ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, Text, View, StyleSheet } from 'react-native';
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
  disabledButton: {
    color: theme.gray,
  },
});

export const GradientButton = ({
  onPress,
  title,
  style = {},
  disabled = false,
}): ReactElement => {
  const defaultColors = [theme.orange, theme.red];
  const disabledColors = [theme.lightGray, theme.lightGray];

  const buttonStyles = [styles.button];

  if (disabled) {
    buttonStyles.push(styles.disabledButton);
  }

  return (
    <View style={style}>
      <Pressable onPress={!disabled ? onPress : undefined}>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={disabled ? disabledColors : defaultColors}
          style={styles.gradient}>
          <Text style={buttonStyles}>{title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
