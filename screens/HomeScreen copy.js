import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { key: 'Training', title: 'Full training' },
  { key: 'TrainingAttack', title: 'Training attack' },
  { key: 'TrainingParry', title: 'Training parry' },
  { key: 'TrainingDodge', title: 'Training dodge' },
  
  // Add more items as needed
];

function HomeScreen({ navigation }) {

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.key)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );




//<Text style={styles.header}>Home</Text>

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
