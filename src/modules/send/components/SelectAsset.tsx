import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { GradientButton } from '../../../shared/components/gradient-button/GradientButton';

export const SelectAsset = ({
  onSelect,
  navigator,
  disabled = false,
}): ReactElement => {
  return (
    <View>
      <GradientButton
        title="Select asset"
        onPress={() => navigator.navigate('Assets', { onSelect })}
        disabled={disabled}
      />
    </View>
  );
};
