import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { 
    key: 'Training',
    title: 'START TRAINING',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1500,
    turnOnTimeMax: 1500,
    turnOffTimeMin: 2000,
    turnOffTimeMax: 4000,
    color1: 'red',
    color2: 'green',
    color3: 'yellow',
  },
/*
  { 
    //green
    key: 'TrainingAttack',
    title: 'Training attack',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1500,
    turnOnTimeMax: 1500,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
    color1: 'red',
    color2: 'green',
    color3: 'yellow',
  },

  { 
    //yellow
    key: 'TrainingParry',
    title: 'Training parry',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1500,
    turnOnTimeMax: 1500,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
    color1: 'red',
    color2: 'green',
    color3: 'yellow',
  },

  { 
    //red
    key: 'TrainingDodge',
    title: 'Training dodge',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1500,
    turnOnTimeMax: 1500,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
    color1: 'red',
    color2: 'green',
    color3: 'yellow',
  },

*/
  // Add more items as needed
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.key, { 
        backgroundColor: item.backgroundColor,
        turnOnTimeMin: item.turnOnTimeMax,
        turnOnTimeMax: item.turnOnTimeMax,
        turnOffTimeMin: item.turnOffTimeMin,
        turnOffTimeMax: item.turnOffTimeMax,
        color1: item.color1, 
        color2: item.color2, 
        color3: item.color3, 
      })}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
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
});

export default HomeScreen;
