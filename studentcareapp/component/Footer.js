import { PaperProvider, Appbar, Divider, Button } from 'react-native-paper';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function Footer() {
    return (
        <PaperProvider>
            <ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>UoV © 2024</Text>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    footer: {
        flex: 2,
        backgroundColor: 'purple',
        height: 60,
        position: 'relative',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    footerText: {
        color: 'white', 
        fontSize: 24,
        fontWeight: 'bold'
    }
});