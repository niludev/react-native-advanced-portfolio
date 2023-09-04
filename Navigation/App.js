
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* style={tailwind('flex-1 items-center justify-center bg-white')}
 */
const Stack = createNativeStackNavigator();

function HomeScreen ({navigation}) {
  const data = ["Eintrag 1", "Eintrag 2", "Eintrag 3"]

  return (
    <View style={styles.container} >
      {data.map((item, index) => (
        <View style={styles.buttonContainer} key={index}>
        <Button
          key={index}
          title={item}
          onPress={() => navigation.navigate('Details', {item})}
        />
        </View>
      ))}
    </View>
  )
}

function DetailScreen({route}) {
  const {item} = route.params;
  console.log({item})

  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 10,
  }
});