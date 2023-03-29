import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTab from './src/FirstTab';
import SecondTab from './src/SecondTab';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// export default function App() {
//   const name = 'Home'
//   return (
//     <View style={styles.container}>
//       <Text>khushbu</Text>
//     </View>
//   );
// }

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstTab} />
        <Tab.Screen name="Second" component={SecondTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
