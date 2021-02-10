import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const globalStyle = { flex: 1 };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
  },
});

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[globalStyle, styles.container]}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
