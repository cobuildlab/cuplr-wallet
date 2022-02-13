import React, { ReactElement } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  image: {
    width: 64,
    height: 64,
  },
});

export const IconHeader = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/cplr.png')}
        style={styles.image}
      />
    </View>
  );
};
