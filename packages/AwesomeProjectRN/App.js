import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
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
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={({ hexCode }) => hexCode}
        renderItem={({ item }) => (
          <ColorBox name={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
