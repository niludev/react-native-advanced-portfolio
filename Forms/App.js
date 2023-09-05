import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return pattern.test(email)
  }

  const handleSubmit = () => {
    let isValid = true;

    if (name.length < 3) {
      setNameError('Name should be at least 3 characters long.')
      isValid = false;
    } else {
      setNameError('')
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid e-mail address.')
      isValid = false
    } else {
      setEmailError('')
    }

    if (isValid) {
      console.log('form is valid')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Name'
        onChangeText={setName}
        value={name}
      />
      {nameError ? <Text style={styles.error} >{nameError}</Text> : null}
      <TextInput 
        style={styles.input}
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
      />
      {emailError ? <Text style={styles.error} >{emailError}</Text> : null}
      <Button title='Send' onPress={handleSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1, 
    borderColor: '#000000', 
    padding: 10, 
    marginBottom: 10
  },
  error: {
    color: 'red',
    marginBottom: 10,
  }
});
