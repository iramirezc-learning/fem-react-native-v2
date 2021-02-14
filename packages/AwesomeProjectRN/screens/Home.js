import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { COLOR_PALETTES } from '../colors';
import PalettePreview from '../components/PalettePreview';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  addNewPaletteButton: {
    paddingVertical: 10,
    marginBottom: 20,
  },
  addNewPaletteText: {
    color: '#c02d28',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

const Home = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pallets, setPallets] = useState(COLOR_PALETTES);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    const palettesFromApi = await result.json();

    if (result.ok) {
      setPallets(palettesFromApi);
    }
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);

    await fetchColorPalettes();

    // Sometimes the request is so fast that
    // the user won't actually know if there was
    // new data, so, we are adding a timeout
    // for better UX?
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  return (
    <FlatList
      style={styles.container}
      data={pallets}
      keyExtractor={({ paletteName }) => paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          style={styles.addNewPaletteButton}
          onPress={() => {
            navigation.navigate('AddNewPaletteModal');
          }}
        >
          <Text style={styles.addNewPaletteText}>+ Add new color palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Home;
