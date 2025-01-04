import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './component/Header';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Login from './component/Login';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Header/>
        <Banner/>
        <Login/>
        <Footer/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}