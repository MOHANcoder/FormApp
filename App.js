// import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form.js';
// import {Card } from 'react-native-paper';

export default function App() {
  const [card,setCard] = useState(false);
  return (
    <View style={styles.container}>
    {
      card?<Card>
      </Card>:
      <Form onSubmit={setCard} />
    }
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
