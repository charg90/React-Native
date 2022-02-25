/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [number, setNumber] = useState('0');
  const [bNumber, setBnumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const formNumber = (textNumber: string) => {
    // not accept double .
    if (number.includes('.') && textNumber === '.') return;
    if (number.startsWith('0' || number.startsWith('-0'))) {
      //decimal number
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        //different from 0 and doesnt has .
      } else if (textNumber !== '0' && !number.includes('0')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    }
  };

  const delLastDigit = (textNumber: string) => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }
    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.Calculadoracontainer}>
      <Text style={styles.smallResult}>{bNumber}</Text>
      <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1}>
        {number}
      </Text>
      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#071040" action={clean} />
        <ButtonCalc text="+/-" color="#071040" action={positiveNegative} />
        <ButtonCalc text="del" color="#071040" action={delLastDigit} />
        <ButtonCalc text="/" color="#ff9427" action={clean} />
      </View>
      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={formNumber} />
        <ButtonCalc text="8" action={formNumber} />
        <ButtonCalc text="9" action={formNumber} />
        <ButtonCalc text="X" color="#ff9427" action={formNumber} />
      </View>
      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={formNumber} />
        <ButtonCalc text="5" action={formNumber} />
        <ButtonCalc text="6" action={formNumber} />
        <ButtonCalc text="-" color="#ff9427" action={clean} />
      </View>
      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={formNumber} />
        <ButtonCalc text="2" action={formNumber} />
        <ButtonCalc text="3" action={formNumber} />
        <ButtonCalc text="+" color="#ff9427" action={clean} />
      </View>
      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="0" stretch action={formNumber} />
        <ButtonCalc text="." action={formNumber} />
        <ButtonCalc text="=" color="#ff9427" action={clean} />
      </View>
    </View>
  );
};

// #2d2d2d
// #ff9427 naranja
