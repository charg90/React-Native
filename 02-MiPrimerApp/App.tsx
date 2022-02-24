/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';

// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HolaMundoScreens} from './src/screens/HolaMundoScreens';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* // <HolaMundoScreens />;
      // <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
