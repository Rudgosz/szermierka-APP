import React, { useState } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';

const data = [
  { 
    key: 'Training',
    title: 'START TRAINING',
    backgroundColor: '#f0f0f0',
    turnOnTimeMax: 3000,
    turnOffTimeMin: 2000,
    turnOffTimeMax: 4000,
    color1: 'red',
    color2: 'green',
    color3: 'yellow',
  },
];

function HomeScreen({ navigation }) {
  const [turnOnTimeMax, setTurnOnTimeMax] = useState(data[0].turnOnTimeMax);
  const [turnOffTimeMin, setTurnOffTimeMin] = useState(data[0].turnOffTimeMin);
  const [turnOffTimeMax, setTurnOffTimeMax] = useState(data[0].turnOffTimeMax);

  // State for toggle switches
  const [isSwitch1On, setIsSwitch1On] = useState(false);
  const [isSwitch2On, setIsSwitch2On] = useState(false);
  const [isSwitch3On, setIsSwitch3On] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.key, { 
        backgroundColor: item.backgroundColor,
        turnOnTimeMax: turnOnTimeMax,
        turnOnTimeMin: turnOnTimeMax,
        turnOffTimeMin: item.turnOffTimeMin,
        turnOffTimeMax: turnOffTimeMax,
        color1: item.color1, 
        color2: item.color2, 
        color3: item.color3, 
      })}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.label}>Turn On Time [s]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOnTimeMax / 1000)}
        onChangeText={text => setTurnOnTimeMax(Number(text))}
      />
      <Text style={styles.label}>Min Off Time [s]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOffTimeMin / 1000)}
        onChangeText={text => setTurnOffTimeMin(Number(text))}
      />
      <Text style={styles.label}>Max Off Time [s]:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(turnOffTimeMax / 1000)}
        onChangeText={text => setTurnOffTimeMax(Number(text))}
      />

      {/* Toggle switches */}
      <View style={styles.toggleContainer}>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Color 1:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitch1On ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsSwitch1On(!isSwitch1On)}
            value={isSwitch1On}
          />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Color 2:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitch2On ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsSwitch2On(!isSwitch2On)}
            value={isSwitch2On}
          />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Color 3:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitch3On ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsSwitch3On(!isSwitch3On)}
            value={isSwitch3On}
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
