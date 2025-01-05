import { PaperProvider, Text, Divider } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './Banner'
import Footer from './Footer'

export default function Subjects() {
    return (
        <PaperProvider>
            <Header />
            <ScrollView>
                <View style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.name}>Computer Science</Text>
                            <Text style={styles.text}>3 Subjects | Average: </Text>
                        </View>

                        <Divider />

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Marks Information</Text>
                            <Text style={styles.text}>Subject           Marks </Text>
                            <Text style={styles.text}>Data Structures          85</Text>
                            <Text style={styles.text}>Algorithms          90</Text>
                            <Text style={styles.text}>Database Systems          88</Text>
                        </View>

                        <Divider />

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
        padding: 16,
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
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
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