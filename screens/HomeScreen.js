import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { 
    key: 'Training',
    title: 'Full training',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1000,
    turnOnTimeMax: 1000,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
  },

  { 
    //green
    key: 'TrainingAttack',
    title: 'Training attack',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1000,
    turnOnTimeMax: 1000,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
  },

  { 
    //yellow
    key: 'TrainingParry',
    title: 'Training parry',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1000,
    turnOnTimeMax: 1000,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
  },

  { 
    //red
    key: 'TrainingDodge',
    title: 'Training dodge',
    backgroundColor: '#f0f0f0',
    turnOnTimeMin: 1000,
    turnOnTimeMax: 1000,
    turnOffTimeMin: 1000,
    turnOffTimeMax: 4000,
  },

  
  // Add more items as needed
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.key, { 
        backgroundColor: item.backgroundColor,
        turnOnTimeMin: item.turnOnTimeMin,
        turnOnTimeMax: item.turnOnTimeMax,
        turnOffTimeMin: item.turnOffTimeMin,
        turnOffTimeMax: item.turnOffTimeMax, 
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
    fontSize: 20,
  },
});

export default HomeScreen;
