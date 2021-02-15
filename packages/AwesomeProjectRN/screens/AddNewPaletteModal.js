import React, { useState, useCallback, useRef } from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import SwitchColor from '../components/SwitchColor';
import COLORS from '../data/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  labelTextInput: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
    padding: 5,
    marginTop: 10,
    marginBottom: 20,
  },
});

const mapColorsToState = (colorsArray) => {
  return colorsArray.reduce((colorKeys, { colorName }) => {
    colorKeys[colorName] = false;
    return colorKeys;
  }, {});
};

const AddNewPaletteModal = ({ navigation }) => {
  const textInputRef = useRef(null);
  const [paletteName, setPaletteName] = useState('');
  const [colorKeys, setColorKeys] = useState(mapColorsToState(COLORS));

  const alertNameError = useCallback(() => {
    Alert.alert('Error', 'Please, provide a name for the new Color Palette.', [
      {
        text: 'OK',
        onPress: () => {
          if (textInputRef?.current) {
            textInputRef.current.focus();
          }
        },
      },
    ]);
  }, []);

  const alertColorsError = useCallback(() => {
    Alert.alert('Error', 'Please, select at least 3 colors.');
  }, []);

  const handleSwitchColorChange = useCallback(
    (colorName, value) => {
      setColorKeys(Object.assign({}, colorKeys, { [colorName]: value }));
    },
    [colorKeys],
  );

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      alertNameError();
      return;
    }

    const colors = COLORS.filter(({ colorName }) => colorKeys[colorName]);

    if (colors.length < 3) {
      alertColorsError();
      return;
    }

    navigation.navigate('Home', {
      paletteName,
      colors,
    });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [paletteName, colorKeys]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelTextInput}>Name:</Text>
      <TextInput
        style={styles.textInput}
        ref={textInputRef}
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder="e.g. Unicorn Colors"
      />
      <FlatList
        data={COLORS}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item: color }) => (
          <SwitchColor
            colorName={color.colorName}
            hexCode={color.hexCode}
            isSelected={colorKeys[color.colorName]}
            handleChange={handleSwitchColorChange}
          />
        )}
      />
      <Button title="Create" onPress={handleSubmit} />
    </View>
  );
};

export default AddNewPaletteModal;
