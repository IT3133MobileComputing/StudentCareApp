import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

export default function Header() {
    const _goBack = () => console.log('Went back');
    return (
        <PaperProvider>
            <ScrollView>
                <View style={styles.imagepad}>
                    <Image source={require('../assets/UOV.jpg')} style={styles.image}/>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}const styles = StyleSheet.create({
    imagepad:{
        padding: 8,
         alignItems: 'center',
        flex: 2,
        marginTop: 0
    },
    image:{
        width: '80%',
        height: 100,
    }, 
});