import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Animated } from 'react-native';

export default function App() {

const moveAnimation = useRef(new Animated.Value(0)).current

const handlePress = () => {
  Animated.timing(moveAnimation, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: true
  }).start();
}

const returnToStartingPoint = () => {
  Animated.timing(moveAnimation, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

return (
  <View style={styles.container}>
      <View style={styles.buttonContainer} >
      <Button title='Animate Square' onPress={handlePress}/>
      <Button title='Go to Start' onPress={returnToStartingPoint} />
      </View>
      <Animated.View style={[styles.square, {transform: [{translateX: moveAnimation}]}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
