import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Contador:{contador}</Text>
      <Fab title="+1" />

      {/* <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titles: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
