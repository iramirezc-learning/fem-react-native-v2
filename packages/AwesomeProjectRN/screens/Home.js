import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { COLOR_PALETTES } from '../colors';
import PalettePreview from '../components/PalettePreview';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={COLOR_PALETTES}
      keyExtractor={({ paletteName }) => paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
    />
  );
};

export default Home;
