import react, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventSource from 'react-native-sse';

export default function App() {
  const [data, setData] = react.useState(null);

  useEffect(() => {
    const es = new EventSource('http://192.168.2.29:8112/wallet/event');
    es.addEventListener('message', (event) => {
      setData(event.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      {data && <Text>New message: {data}</Text>}
      <StatusBar style='auto' />
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
