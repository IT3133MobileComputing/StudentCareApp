import { PaperProvider, Appbar, Divider, Button, Text } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import Banner from './Banner'
export default function Header() {
    const _goBack = () => console.log('Went back');
    return (
        <PaperProvider>
            <ScrollView>
                <Appbar.Header mode='center-aligned' style={{ backgroundColor: 'purple' }}>
                    <Appbar.BackAction onPress={_goBack} color='white' />
                    <Appbar.Content title="UoV Student Care" titleStyle={{ color: 'white', fontSize: 24, fontWeight: 'bold' }} />
                </Appbar.Header>
                <Banner/>
            </ScrollView>
        </PaperProvider>
    )
}