import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { COLOR_PALETTES } from '../colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
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
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 3,
  },
});

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={COLOR_PALETTES}
      keyExtractor={({ paletteName }) => paletteName}
      renderItem={({ item: { colors, paletteName } }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ColorPalette', {
              colors,
              paletteName,
            })
          }
        >
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
      )}
    />
  );
};

export default Home;
