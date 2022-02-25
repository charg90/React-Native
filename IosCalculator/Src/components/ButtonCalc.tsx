/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  stretch?: boolean;
  action: (numberText: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#6075EA',
  stretch = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.Buttons,
          backgroundColor: color,
          width: stretch ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.ButtonText,
            color: color === '#071040' ? 'white' : 'black',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Buttons: {
    height: 80,
    width: 80,
    backgroundColor: '#3e55d4',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ButtonText: {
    textAlign: 'center',
    color: 'black',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
