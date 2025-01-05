import { PaperProvider, TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        if (!username.trim() || !password.trim()) {
            setError("Username and password are required");
            setVisible(true);
            return false;
        }
        return true;
    }

    const handleLogin = async () => {
        if (!validateForm()) return;

        setLoading(true);
        try {
            if (username === "student" && password === "password") {
                // Clear form and errors
                setUsername("");
                setPassword("");
                setError("");

                // Navigate to home screen
                // navigation.navigate('Home');
            } else {
                setError("Invalid username or password");
                setVisible(true);
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            setVisible(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PaperProvider>
            <Header />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled">
                        <View style={styles.formContainer}>
                            <Text variant="headlineMedium" style={styles.title}>
                                STUDENT LOGIN
                            </Text>

                            <TextInput label='Username' mode='outlined'
                                value={username}
                                onChangeText={text => setUserName(text)}
                                style={styles.input}
                                error={error && !username}
                            />

                            <TextInput label='Password' mode='outlined'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                style={styles.input}
                                secureTextEntry={!showPassword}
                                error={error && !password}
                                right={<TextInput.Icon
                                    icon={showPassword ? 'eye-off' : 'eye'}
                                    onPress={() => setShowPassword(!showPassword)}
                                />}
                            />

                            <Button
                                mode="contained"
                                buttonColor='purple'
                                onPress={handleLogin}
                                style={styles.button}
                                loading={loading}
                                disabled={loading}>
                                {loading ? 'Loggin in...' : 'Login'}
                            </Button>
                        </View>

                        <Snackbar
                            visible={visible}
                            onDismiss={() => setVisible(false)}
                            duration={3000}
                            style={styles.snackbar}
                            action={{
                                label: 'Close',
                                onPress: () => setVisible(false),
                            }}
                        >
                            {error}
                        </Snackbar>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <Footer />
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 8,
        paddingVertical: 5,
    },
    snackbar: {
        backgroundColor: '#d32f2f',
    },
});