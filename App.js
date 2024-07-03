import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Training from './screens/Training';
import TrainingDodge from './screens/TrainingDodge';
import TrainingAttack from './screens/TrainingAttack';
import TrainingParry from './screens/TrainingParry';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerStyle: { backgroundColor: '#f3ebe1' }, // Deep brown color
            headerTintColor: '#4d4741', // Light parchment color for text
            headerTitleStyle: { fontWeight: 'bold', fontFamily: 'serif' } // Adding a serif font for a more medieval look
          }}
        />
        <Stack.Screen name="Training" component={Training} options={{ headerShown: false }}/>
        <Stack.Screen name="TrainingDodge" component={TrainingDodge} options={{ headerShown: false }}/>
        <Stack.Screen name="TrainingAttack" component={TrainingAttack} options={{ headerShown: false }}/>
        <Stack.Screen name="TrainingParry" component={TrainingParry} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
