import React from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import your icon library

const ClearButton = ({ onPress }) => (
  <TouchableOpacity style={styles.clearButton} onPress={onPress}>
    <Ionicons name="close-circle" size={24} color="gray" />
  </TouchableOpacity>
);

const CustomTextInput = ({ value, onChangeText, clearText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={String(value)}
      onChangeText={onChangeText}
    />
    {value !== '' && <ClearButton onPress={clearText} />}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  clearButton: {
    padding: 5,
  },
});

export default CustomTextInput;
