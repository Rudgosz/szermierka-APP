import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
  
  const [disableFlatList, setDisableFlatList] = useState(false);
  const [maxOffTimeError, setMaxOffTimeError] = useState(false);
  const [turnOnTimeError, setTurnOnTimeError] = useState(false);
  const [turnOffTimeMinError, setTurnOffTimeMinError] = useState(false);
  const [turnOffTimeMaxError, setTurnOffTimeMaxError] = useState(false);

  const [isAttackSwitchOn, setIsAttackSwitchOn] = useState(true);
  const [isDodgeSwitchOn, setIsDodgeSwitchOn] = useState(true);
  const [isParrySwitchOn, setIsParrySwitchOn] = useState(true);

  useEffect(() => {
    const isValidNumber = (value) => {
      return /^\d+$/.test(value);
    };

    if (!turnOnTimeMax || !turnOffTimeMin || !turnOffTimeMax || turnOffTimeMin > turnOffTimeMax || !isValidNumber(turnOnTimeMax) || !isValidNumber(turnOffTimeMin) || !isValidNumber(turnOffTimeMax) || (!isAttackSwitchOn && !isDodgeSwitchOn && !isParrySwitchOn)) {
      setDisableFlatList(true);
    } else {
      setDisableFlatList(false);
    }

    if (turnOffTimeMin > turnOffTimeMax) {
      setMaxOffTimeError(true);
    } else {
      setMaxOffTimeError(false);
    }

    setTurnOnTimeError(!isValidNumber(turnOnTimeMax));
    setTurnOffTimeMinError(!isValidNumber(turnOffTimeMin));
    setTurnOffTimeMaxError(!isValidNumber(turnOffTimeMax));

  }, [turnOnTimeMax, turnOffTimeMin, turnOffTimeMax, isAttackSwitchOn, isDodgeSwitchOn, isParrySwitchOn]);

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
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f8f1e9' }}>
      <Text style={styles.label}>Turn On Time [ms]:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, turnOnTimeError && styles.inputError]}
          keyboardType='numeric'
          value={String(turnOnTimeMax)}
          onChangeText={text => setTurnOnTimeMax(text)}
        />
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

      <Text style={styles.modesLabel}>Modes:</Text>

      <View style={styles.toggleContainer}>
        <View style={styles.separator}/>
        
        <View style={styles.toggleRow}>
          <Text style={styles.labelModes}>Attack [green]:</Text>
          <Switch
           trackColor={{ false: "#767577", true: "#9c938c" }}
            thumbColor={isAttackSwitchOn ? "#870f01" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsAttackSwitchOn(!isAttackSwitchOn)}
            value={isAttackSwitchOn}
          />
        </View>

        <View style={styles.separator}/>

        <View style={styles.toggleRow}>
          <Text style={styles.labelModes}>Dodge [red]:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#9c938c" }}
            thumbColor={isDodgeSwitchOn ? "#870f01" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsDodgeSwitchOn(!isDodgeSwitchOn)}
            value={isDodgeSwitchOn}
          />
        </View>
        <View style={styles.separator}/>

        <View style={styles.toggleRow}>
          <Text style={styles.labelModes}>Parry [yellow]:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#9c938c" }}
            thumbColor={isParrySwitchOn ? "#870f01" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsParrySwitchOn(!isParrySwitchOn)}
            value={isParrySwitchOn}
          />
        </View>
        <View style={styles.separator}/>
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
    color: '#3d1a0a', // Dark brown color
  },
  item: {
    backgroundColor: '#660c01', // Darker brown
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  disabledItem: {
    backgroundColor: '#d4b59e', // Lighter brown
  },
  title: {
    fontSize: 22,
    color: '#f3ebe1', // Light parchment color
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#3d1a0a', // Dark brown color
  },
  labelModes: {
    fontSize: 19,
    color: '#3d1a0a', // Dark brown color
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    position: 'relative',
    backgroundColor: '#fff1e6', // Light parchment color
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#3d1a0a', // Dark brown color
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
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
    marginBottom: 3,
    marginTop: 3,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  modesLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#3d1a0a', // Dark brown color
  },
  separator: {
    borderBottomColor: '#3d1a0a', // Dark brown color
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HomeScreen;
