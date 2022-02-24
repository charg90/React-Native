/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <View>
        <View style={styles.container}>
          <View style={styles.cajaAzul} />
          <View style={styles.cajaMorada} />
        </View>
        <Text style={styles.title}>
          w : {width},h:{height}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'pink',
  },
  cajaMorada: {
    backgroundColor: 'red',
    width: '50%',
    height: '50%',
  },
  cajaAzul: {
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
