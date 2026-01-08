import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Screeens/Product/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <ProductContainer />
      </View>
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
