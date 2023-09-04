import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; 
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, []);

  const renderItem = ({item}) => (
    <View style={{marginBottom: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  )

  const keyExtractor = ({id}) => id.toString()

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
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
});