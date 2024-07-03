import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importing MaterialIcons from Expo vector icons

const data = [
  { 
    key: 'Training',
    title: 'START TRAINING',
    backgroundColor: '#f0f0f0',
    turnOnTimeMax: 1000,
    turnOffTimeMin: 2000,
    turnOffTimeMax: 3000,
    attackColor: 'green',
    dodgeColor: 'red',
    parryColor: 'yellow',
  },
];

function HomeScreen({ navigation }) {
  const [turnOnTimeMax, setTurnOnTimeMax] = useState(data[0].turnOnTimeMax);
  const [turnOffTimeMin, setTurnOffTimeMin] = useState(data[0].turnOffTimeMin);
  const [turnOffTimeMax, setTurnOffTimeMax] = useState(data[0].turnOffTimeMax);
  
  // State for disabling FlatList
  const [disableFlatList, setDisableFlatList] = useState(false);

  // State for error messages
  const [maxOffTimeError, setMaxOffTimeError] = useState(false);
  const [turnOnTimeError, setTurnOnTimeError] = useState(false);
  const [turnOffTimeMinError, setTurnOffTimeMinError] = useState(false);
  const [turnOffTimeMaxError, setTurnOffTimeMaxError] = useState(false);

  // State for toggle switches
  const [isAttackSwitchOn, setIsAttackSwitchOn] = useState(true);
  const [isDodgeSwitchOn, setIsDodgeSwitchOn] = useState(true);
  const [isParrySwitchOn, setIsParrySwitchOn] = useState(true);

  // Effect to check and set error state
  useEffect(() => {
    // Function to check if value is a valid number
    const isValidNumber = (value) => {
      return /^\d+$/.test(value); // Matches one or more digits
    };

    // Check if any required input is empty or if Min Off Time > Max Off Time
    if (!turnOnTimeMax || !turnOffTimeMin || !turnOffTimeMax || turnOffTimeMin > turnOffTimeMax || !isValidNumber(turnOnTimeMax) || !isValidNumber(turnOffTimeMin) || !isValidNumber(turnOffTimeMax)) {
      setDisableFlatList(true);
    } else {
      setDisableFlatList(false);
    }

    if (!isAttackSwitchOn && !isDodgeSwitchOn && !isParrySwitchOn) {
      setDisableFlatList(true);
    } else {
      setDisableFlatList(false);
    }
    

    // Check if Min Off Time > Max Off Time
    if (turnOffTimeMin > turnOffTimeMax) {
      setMaxOffTimeError(true);
    } else {
      setMaxOffTimeError(false);
    }

    // Check for invalid input errors
    setTurnOnTimeError(!isValidNumber(turnOnTimeMax));
    setTurnOffTimeMinError(!isValidNumber(turnOffTimeMin));
    setTurnOffTimeMaxError(!isValidNumber(turnOffTimeMax));

  }, [turnOnTimeMax, turnOffTimeMin, turnOffTimeMax, isAttackSwitchOn, isDodgeSwitchOn, isParrySwitchOn]);

  // Function to clear TextInput fields
  const clearTextInput = (setStateFunction) => {
    setStateFunction('');
  };


  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, disableFlatList && styles.disabledItem]}
      onPress={() => !disableFlatList && navigation.navigate(item.key, { 
        backgroundColor: item.backgroundColor,
        turnOnTimeMax: turnOnTimeMax,
        turnOnTimeMin: turnOnTimeMax,
        turnOffTimeMin: item.turnOffTimeMin,
        turnOffTimeMax: turnOffTimeMax,
        attackColor: item.attackColor, 
        dodgeColor: item.dodgeColor, 
        parryColor: item.parryColor,
        isAttackSwitchOn: isAttackSwitchOn,
        isDodgeSwitchOn: isDodgeSwitchOn,
        isParrySwitchOn: isParrySwitchOn, 
      })}
      disabled={disableFlatList}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.label}>Turn On Time [ms]:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, turnOnTimeError && styles.inputError]}
          keyboardType='numeric'
          value={String(turnOnTimeMax)}
          onChangeText={text => setTurnOnTimeMax(text)}
        />
        {/* Clear button for Turn On Time */}
        {!!turnOnTimeMax && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => clearTextInput(setTurnOnTimeMax)}
          >
            <MaterialIcons name="cancel" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      {turnOnTimeError && (
        <Text style={styles.errorText}>Enter valid number</Text>
      )}

      <Text style={styles.label}>Min Off Time [ms]:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, turnOffTimeMinError && styles.inputError]}
          keyboardType='numeric'
          value={String(turnOffTimeMin)}
          onChangeText={text => setTurnOffTimeMin(text)}
        />
        {/* Clear button for Min Off Time */}
        {!!turnOffTimeMin && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => clearTextInput(setTurnOffTimeMin)}
          >
            <MaterialIcons name="cancel" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      {turnOffTimeMinError && (
        <Text style={styles.errorText}>Enter valid number</Text>
      )}

      {/* Error message for Min > Max */}
      {maxOffTimeError && (
        <Text style={styles.errorText}>Min must be less than Max</Text>
      )}

      <Text style={styles.label}>Max Off Time [ms]:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, turnOffTimeMaxError && styles.inputError]}
          keyboardType='numeric'
          value={String(turnOffTimeMax)}
          onChangeText={text => setTurnOffTimeMax(text)}
        />
        {/* Clear button for Max Off Time */}
        {!!turnOffTimeMax && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => clearTextInput(setTurnOffTimeMax)}
          >
            <MaterialIcons name="cancel" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      {turnOffTimeMaxError && (
        <Text style={styles.errorText}>Enter valid number</Text>
      )}

      {/* Toggle switches */}
      <View style={styles.toggleContainer}>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Attack (green):</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isAttackSwitchOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsAttackSwitchOn(!isAttackSwitchOn)}
            value={isAttackSwitchOn}
          />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Dodge (red):</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDodgeSwitchOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsDodgeSwitchOn(!isDodgeSwitchOn)}
            value={isDodgeSwitchOn}
          />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Parry (yellow):</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isParrySwitchOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsParrySwitchOn(!isParrySwitchOn)}
            value={isParrySwitchOn}
          />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#a38874',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  disabledItem: {
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 22,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20, // Add padding at the bottom
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    position: 'relative', // Ensure position relative for absolute positioning of clear button
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red', // Change border color for error state
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    padding: 8,
  },
  toggleContainer: {
    marginBottom: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    textAlign: 'center', // Center the error message
  },
});

export default HomeScreen;
