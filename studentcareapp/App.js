import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Course from './component/Course';
import Profile from './component/Profile';
import Subjects from './component/Subjects';
import BottomNavigation from './component/BottomNavigation';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="BottomTabs" 
                    component={BottomNavigation} 
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}