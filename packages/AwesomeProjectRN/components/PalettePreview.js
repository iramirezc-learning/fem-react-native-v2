import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxes: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    marginRight: 10,
    width: 40,
    height: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

const PalettePreview = ({ handlePress, palette: { colors, paletteName } }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        style={styles.boxes}
        data={colors.slice(0, 5)}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item: { hexCode } }) => (
          <View style={[styles.box, { backgroundColor: hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

export default PalettePreview;
