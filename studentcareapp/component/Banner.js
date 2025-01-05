import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

export default function Banner() {
    const _goBack = () => console.log('Went back');
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/UOV.jpg')} style={styles.image} />
                </View>
            </ScrollView>
        </PaperProvider>
    )
} 
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    imageContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    image: {
        width: '80%',
        height: '100%',
        maxWidth: 400,
    },
})