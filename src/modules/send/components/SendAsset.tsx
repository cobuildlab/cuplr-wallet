import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { GradientButton } from '../../../shared/components/gradient-button/GradientButton';

export const SendAsset = ({ onSend, disabled }): ReactElement => {
  return (
    <View>
      <GradientButton title="Send asset" onPress={onSend} disabled={disabled} />
    </View>
  );
};
