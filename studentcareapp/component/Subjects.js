import { PaperProvider, Text, Divider } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './Header'
import Footer from './Footer'
import { subjects, marks, courses } from '../database/StudentsDb'

export default function Subjects({ route }) {
    const { student } = route.params;
    const cid = student.course_id;
    const course = courses.find(c => c.id === cid);
    const courseSubjects = subjects.filter(subject => subject.course_id === cid);
    const studentMarks = marks.filter(mark => mark.student_id === student.id);

    return (
        <PaperProvider>
            <Header />
            <ScrollView>
                <View style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.name}>{course.name}</Text>
                            <Text style={styles.text}>{courseSubjects.length} Subjects | Average: {averageMarks.toFixed(2)}</Text>
                        </View>

                        <Divider />

                        <Text style={styles.sectionTitle}>Marks Information</Text>
                        {courseSubjects.map(subject => (
                            <View key={subject.id} style={styles.section}>
                                <Text style={styles.text}>{subject.name}</Text>
                                <Text style={styles.text}>
                                    Marks: {studentMarks.find(mark => mark.subject_id === subject.id)?.marks || 'N/A'}
                                </Text>
                            </View>
                        ))}

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