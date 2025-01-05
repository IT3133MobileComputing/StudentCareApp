import { PaperProvider, Text, Divider } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './Header'
import Footer from './Footer'
import { course } from '../database/StudentsDb'

export default function Course({route}) {
    const { student } = route.params;
    const id = student.course_id;
    const course = courses.find(c => c.id === id);

    if(!course){
        return(
            <View>
                <Header/>
                <Text style={styles.name}>
                    Course not found
                </Text>
            </View>
        )
    }

    return (
        <PaperProvider>
            <Header />
            <ScrollView>
                <View style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.name}>{course.name}</Text>
                            <Text style={styles.text}>Code: {course.course_code}| Dept: {}</Text>
                        </View>

                        <Divider />

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Course Information</Text>
                            <Text style={styles.text}>Code: {course.code}</Text>
                            <Text style={styles.text}>Department: {course.department}</Text>
                            <Text style={styles.text}>Duration: {course.duration}</Text>
                            <Text style={styles.text}>Description: {course.description}</Text>
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