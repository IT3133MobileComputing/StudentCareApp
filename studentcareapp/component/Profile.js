import { PaperProvider, Text, Divider } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer'
import BottomNavigation from './BottomNavigation'

export default function Profile() {
    return (
        <PaperProvider>
            <Header />
            <ScrollView>
                <View style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/150' }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>Alice Johnson</Text>
                            <Text style={styles.text}>Age: 21 | Gender: Female</Text>
                        </View>

                        <Divider />

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Contact Information</Text>
                            <Text style={styles.text}>Email: </Text>
                            <Text style={styles.text}>Phone: </Text>
                            <Text style={styles.text}>Address: </Text>
                        </View>

                        <Divider />

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Biological Information</Text>
                            <Text style={styles.text}>Gender: </Text>
                            <Text style={styles.text}>Age: </Text>
                            <Text style={styles.text}>Blood Group: </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <Footer />
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
    },
    container: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginTop: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        color: '#555',
        marginBottom: 3,
    },
});