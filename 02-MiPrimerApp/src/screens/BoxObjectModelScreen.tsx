/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    // backgroundColor: 'red',
    borderWidth: 10,
    paddingHorizontal: 100,
    paddingVertical: 100,
    marginTop: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
});
