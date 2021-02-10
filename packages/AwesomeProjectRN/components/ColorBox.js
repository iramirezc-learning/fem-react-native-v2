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

const ColorBox = ({ name, colorHex }) => {
  return (
    <View style={[styles.box, { backgroundColor: colorHex }]}>
      <Text style={styles.text}>
        {name} {colorHex}
      </Text>
    </View>
  );
};

export default ColorBox;
