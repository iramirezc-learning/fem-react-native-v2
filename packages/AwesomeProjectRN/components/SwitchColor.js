import React from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  box: {
    width: 35,
    height: 35,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  label: {
    fontSize: 15,
  },
});

const SwitchColor = ({ colorName, hexCode, isSelected, handleChange }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: hexCode }]} />
      <Text style={styles.label}>{colorName}</Text>
      <Switch
        value={isSelected}
        onValueChange={(value) => handleChange(colorName, value)}
      />
    </View>
  );
};

export default SwitchColor;
