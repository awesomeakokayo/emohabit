import { StyleSheet, Dimensions, Image, Text, View, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function Index() {
    const router = useRouter();

    const timeline = [
        { time: '09:00 AM', endTime: '10:00 AM', title: 'Morning Meditation', category: 'Focus', color: '#FF8A00' },
        { time: '10:00 AM', endTime: '01:00 PM', title: 'Deep Work Session', category: 'Work', color: '#666' },
        { time: '01:00 PM', endTime: '02:00 PM', title: 'Lunch Break', category: 'Break', color: '#aaa' },
        { time: '02:00 PM', endTime: '04:00 PM', title: 'Team Sync', category: 'Work', color: '#666' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Good Morning, Alex</Text>
                    <Text style={styles.date}>Monday, Jan 31</Text>
                </View>
                <View style={styles.headerRight}>
                    <Pressable onPress={() => router.push('/tasks/new')} style={styles.addButton}>
                        <Ionicons name="add" size={24} color="white" />
                    </Pressable>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>AH</Text>
                    </View>
                </View>
            </View>

            <View style={styles.progressCard}>
                <View style={styles.progressInfo}>
                    <Text style={styles.progressTitle}>Daily Goal</Text>
                    <Text style={styles.progressSubtitle}>3/5 Habits Completed</Text>
                </View>
                <View style={styles.circularProgress}>
                    <Text style={styles.progressPercent}>60%</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Today's Schedule</Text>

            <ScrollView style={styles.timelineContainer} contentContainerStyle={{ paddingBottom: 100 }}>
                {timeline.map((item, index) => (
                    <View key={index} style={styles.timelineItem}>
                        <Text style={styles.timeText}>{item.time}</Text>
                        <View style={styles.timelineContent}>
                            <View style={[styles.timelineLine, { backgroundColor: item.color }]} />
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                    <View style={[styles.catBadge, { backgroundColor: item.color }]}>
                                        <Text style={styles.catText}>{item.category}</Text>
                                    </View>
                                </View>
                                <Text style={styles.cardTime}>{item.time} - {item.endTime}</Text>
                            </View>
                        </View>
                    </View>
                ))}

                <Pressable style={styles.suggestionBox} onPress={() => router.push('/tasks/new')}>
                    <Ionicons name="sparkles" size={20} color={Colors.primary} />
                    <Text style={styles.suggestionText}>Review tomorrow's plan</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackishOrange,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    date: {
        color: '#aaa',
        fontSize: 14,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: 'white',
        fontWeight: 'bold',
    },
    progressCard: {
        backgroundColor: '#332a24',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    progressTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    progressSubtitle: {
        color: '#aaa',
        fontSize: 14,
    },
    circularProgress: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressPercent: {
        color: 'white',
        fontWeight: 'bold',
    },
    sectionTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    timelineContainer: {
        flex: 1,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 15,
    },
    timeText: {
        color: '#888',
        width: 70,
        fontSize: 12,
        paddingTop: 5,
    },
    timelineContent: {
        flex: 1,
        flexDirection: 'row',
    },
    timelineLine: {
        width: 4,
        borderRadius: 2,
        marginRight: 15,
    },
    card: {
        flex: 1,
        backgroundColor: '#2a221d',
        borderRadius: 16,
        padding: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    catBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    catText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    cardTime: {
        color: '#888',
        fontSize: 12,
    },
    suggestionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
        borderRadius: 16,
        marginBottom: 20,
        gap: 10,
    },
    suggestionText: {
        color: Colors.primary,
        fontWeight: '600',
    }
});
