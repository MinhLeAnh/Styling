import { StyleSheet, View,Text } from 'react-native';

const Square = ({ backgroundColor,text }) => {
  return <View style={[styles.square, { backgroundColor }]} >
    <Text>{text}</Text>
  </View>;
};


export default function App() {
  return (
    <View style={styles.container}>
      <Square backgroundColor="red" text="square 1" />
      <Square backgroundColor="green" text="square 2" />
      <Square backgroundColor="#cde" text="square 3"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
