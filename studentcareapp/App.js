import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
}