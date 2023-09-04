import React from "react";
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet  } from "react-native";
import { useNavigation } from '@react-navigation/native';

/* <Text>Detail Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <Text>Back to Home Page</Text>
            </TouchableOpacity> 
            
            
            
            style={styles.container}            

            */

const Detail = () => {
    const navigation = useNavigation();
    return (
        <View >
            <Text>Detail Page</Text>
        </View>
    )
}

export default Detail;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });