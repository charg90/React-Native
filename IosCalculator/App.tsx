import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {CalculadoraScreen} from './Src/screens/CalculadoraScreen';
import {styles} from './Src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#130589" barStyle="light-content" />

      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
