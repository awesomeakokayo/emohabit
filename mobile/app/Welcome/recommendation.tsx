import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Recommendation = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.navRow}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </Pressable>
                    <Pressable onPress={() => router.push('/(tabs)')}>
                        <Text style={styles.skipText}>Skip</Text>
                    </Pressable>
                </View>
                <Text style={styles.headerTitle}>AI Recommendations</Text>
                <Text style={styles.title}>Your AI-Optimized Routines</Text>
                <Text style={styles.subtitle}>Based on your sleep patterns and productivity goals, we've generated two starter paths. Choose one to customize.</Text>
            </View>

            <ScrollView horizontal contentContainerStyle={styles.scrollContent} showsHorizontalScrollIndicator={false}>
                {/* Card 1: Early Bird */}
                <View style={styles.card}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>BEST FOR FOCUS</Text>
                    </View>
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.routineName}>The Early Bird</Text>
                            <Text style={styles.routineTime}>05:30 AM - 09:30 PM</Text>
                        </View>
                        <Ionicons name="sunny-outline" size={28} color={Colors.primary} />
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.stat}>
                            <Ionicons name="bed-outline" size={18} color="#aaa" />
                            <Text style={styles.statText}>8h Sleep</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.stat}>
                            <Ionicons name="brain-outline" size={18} color={Colors.primary} />
                            <Text style={[styles.statText, { color: Colors.primary }]}>4h Deep Work</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.stat}>
                            <Ionicons name="phone-portrait-outline" size={18} color="#aaa" />
                            <Text style={styles.statText}>&lt; 2h Screen</Text>
                        </View>
                    </View>

                    <View style={styles.schedulePreview}>
                        <View style={styles.scheduleItem}>
                            <Text style={styles.time}>06:00</Text>
                            <View style={styles.dotOrange} />
                            <Text style={styles.activity}>Morning Run & Sun</Text>
                        </View>
                        <View style={styles.scheduleItem}>
                            <Text style={styles.time}>08:00</Text>
                            <View style={styles.dotGray} />
                            <Text style={styles.activity}>Deep Work Block</Text>
                        </View>
                        <View style={styles.scheduleItem}>
                            <Text style={styles.time}>20:30</Text>
                            <View style={styles.dotGray} />
                            <Text style={styles.activity}>No Screens / Read</Text>
                        </View>
                    </View>

                    <Pressable
                        style={styles.actionButton}
                        onPress={() => router.push('/tasks/new')}
                    >
                        <Text style={styles.actionButtonText}>Review & Customize</Text>
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </Pressable>
                </View>

                {/* Card 2: Placeholder */}
                <View style={[styles.card, { marginLeft: 15, opacity: 0.5 }]}>
                    <Text style={{ color: 'white' }}>Night Owl Option...</Text>
                </View>
            </ScrollView>

            <Pressable style={styles.emptyLink} onPress={() => router.push('/(tabs)')}>
                <Text style={styles.emptyLinkText}>Create Empty Routine Instead</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackishOrange,
        paddingTop: 50,
        paddingBottom: 20,
    },
    header: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    navRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    skipText: {
        color: '#A0A0A0',
        fontSize: 16,
    },
    headerTitle: {
        color: '#A0A0A0',
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        top: 0,
        marginTop: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#A0A0A0',
        lineHeight: 24,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#352B24', // Slightly lighter than background
        borderRadius: 24,
        padding: 20,
        width: 320,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    badge: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
        marginBottom: 15,
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    routineName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    routineTime: {
        color: '#A0A0A0',
        fontSize: 14,
    },
    statsRow: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 12,
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    stat: {
        alignItems: 'center',
        gap: 5,
    },
    divider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    statText: {
        fontSize: 12,
        color: '#ccc',
        fontWeight: '600',
    },
    schedulePreview: {
        gap: 15,
        marginBottom: 25,
    },
    scheduleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    time: {
        color: '#888',
        width: 45,
        fontSize: 14,
    },
    dotOrange: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.primary,
    },
    dotGray: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#666',
    },
    activity: {
        color: '#ECEDEE',
        fontSize: 16,
    },
    actionButton: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 16,
        gap: 10,
    },
    actionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyLink: {
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#444',
        marginHorizontal: 20,
        borderRadius: 16,
    },
    emptyLinkText: {
        color: '#aaa',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default Recommendation;
