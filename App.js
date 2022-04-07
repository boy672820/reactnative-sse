import react, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventSource from 'react-native-sse';

export default function App() {
  const [data, setData] = react.useState(null);

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3YjhjNDFhNmQwMzU3Yjk3OWU4Mjc0MjQ4ZWRjN2Y3MTo5OTZkZWRlZTU1YjVhNDkzYzkiLCJpYXQiOjE2NDU0MTY5NDIsImV4cCI6MTY0NzI3Njk0Mn0.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3YjhjNDFhNmQwMzU3Yjk3OWU4Mjc0MjQ4ZWRjN2Y3MTo5OTZkZWRlZTU1YjVhNDkzYzkiLCJpYXQiOjE2NDU0MTY5NDIsImV4cCI6MTY0NzI3Njk0Mn0.aifkPS1zNrMesKztozsav4zyEsJ60nUABBnCnrabLBw';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const es = new EventSource('http://127.0.0.1:8113/wallet/event', config);

    es.addEventListener('open', (event) => {
      console.log(event);
    });

    es.addEventListener('message', (event) => {
      console.log(event);
      setData(event.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
