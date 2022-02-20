import React, { ReactElement } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import makeBlockie from 'ethereum-blockies-base64';

const styles = StyleSheet.create({
  blockie: {
    width: 32,
    height: 32,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export const Blockie = ({ seed, style = {} }): ReactElement => {
  const uri = makeBlockie(seed);

  return (
    <View style={{ ...styles.blockie, ...style }}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};
