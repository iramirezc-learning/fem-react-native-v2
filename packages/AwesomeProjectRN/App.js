import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { COLORS } from './colors';
import ColorBox from './components/ColorBox';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Solarized</Text>
        <FlatList
          data={COLORS}
          keyExtractor={({ hexCode }) => hexCode}
          renderItem={({ item }) => (
            <ColorBox name={item.colorName} colorHex={item.hexCode} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
