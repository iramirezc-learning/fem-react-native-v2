import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const getTextColor = (hexCode) => {
  const isLightColor = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1;

  return {
    color: isLightColor ? 'black' : 'white',
  };
};

const ColorBox = ({ name, hexCode }) => {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={[styles.text, getTextColor(hexCode)]}>
        {name} {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;
