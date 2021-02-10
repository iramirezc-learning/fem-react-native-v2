import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../colors';
import ColorBox from '../components/ColorBox';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

const ColorPalette = () => {
  return (
    <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={({ hexCode }) => hexCode}
      renderItem={({ item }) => (
        <ColorBox name={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
    />
  );
};

export default ColorPalette;
