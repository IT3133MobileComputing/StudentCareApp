import { PaperProvider, TextInput, Button, Text } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <PaperProvider>
            <ScrollView>
                <View>
                    <Text variant="headlineMedium">STUDENT LOGIN</Text>
                    <TextInput label='Username' mode='outlined'
                        value={username}
                        onChangeText={text => setUserName}
                    />

                    <TextInput label='Password' mode='outlined'
                        value={password}
                        onChangeText={password => setPassword}
                    />

                    <Button
                    mode="contained"
                    buttonColor='purple'
                    onPress={() => console.log('Pressed Login Button')}>
                    Login
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}