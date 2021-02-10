import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox name="Cyan" colorHex="#2aa198" />
        <ColorBox name="Blue" colorHex="#268bd2" />
        <ColorBox name="Magenta" colorHex="#d33682" />
        <ColorBox name="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

export default App;
