import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={({ hexCode }) => hexCode}
      renderItem={({ item }) => (
        <ColorBox name={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

export default ColorPalette;
