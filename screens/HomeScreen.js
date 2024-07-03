import React, { useState } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';

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

  // State for toggle switches
  const [isAttackSwitchOn, setIsAttackSwitchOn] = useState(true);
  const [isDodgeSwitchOn, setIsDodgeSwitchOn] = useState(true);
  const [isParrySwitchOn, setIsParrySwitchOn] = useState(true);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.key, { 
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
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.label}>Turn On Time [ms]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOnTimeMax)}
        onChangeText={text => setTurnOnTimeMax(Number(text))}
      />
      <Text style={styles.label}>Min Off Time [ms]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOffTimeMin)}
        onChangeText={text => setTurnOffTimeMin(Number(text))}
      />
      <Text style={styles.label}>Max Off Time [ms]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOffTimeMax)}
        onChangeText={text => setTurnOffTimeMax(Number(text))}
      />

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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
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
});

export default HomeScreen;
