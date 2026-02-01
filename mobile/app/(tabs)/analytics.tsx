import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit"; // Using chart kit

const screenWidth = Dimensions.get("window").width;

const Analytics = () => {
    // Mock Data
    const chartData = {
        labels: ["W1", "W2", "W3", "W4"],
        datasets: [
            {
                data: [20, 45, 28, 80, 50, 43], // Random-ish data matching the curve shape roughly
                color: (opacity = 1) => `rgba(255, 138, 0, ${opacity})`, // primary orange
                strokeWidth: 2
            }
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "#231d19",
        backgroundGradientTo: "#231d19",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 138, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "0", // Hide dots for smooth look like screenshot
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.header}>
                <Pressable><Ionicons name="arrow-back" size={24} color="white" /></Pressable>
                <Text style={styles.headerTitle}>Goal Details</Text>
                <Pressable><Ionicons name="ellipsis-horizontal" size={24} color="white" /></Pressable>
            </View>

            <Text style={styles.goalTitle}>Become a Morning Person</Text>

            {/* Circular Progress Placeholder - implementing with simple View/Text for now or SVG if available */}
            <View style={styles.circularContainer}>
                <View style={styles.circleOuter}>
                    <View style={styles.circleInner}>
                        <Text style={styles.likelihoodLabel}>LIKELIHOOD</Text>
                        <Text style={styles.percentage}>78%</Text>
                        <View style={styles.badge}>
                            <Ionicons name="trending-up" size={12} color={Colors.primary} />
                            <Text style={styles.badgeText}>On Track</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.trendContainer}>
                <View style={styles.trendHeader}>
                    <Text style={styles.sectionTitle}>Success Trend</Text>
                    <Text style={styles.trendValue}>+12%</Text>
                </View>
                <Text style={styles.subtitle}>Last 30 Days</Text>

                <LineChart
                    data={chartData}
                    width={screenWidth - 40}
                    height={180}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                    withInnerLines={false}
                    withOuterLines={false}
                />
            </View>

            <View style={styles.insightCard}>
                <View style={[styles.badge, { marginBottom: 10, alignSelf: 'flex-start' }]}>
                    <Ionicons name="sparkles" size={12} color={Colors.primary} />
                    <Text style={styles.badgeText}>AI INSIGHT</Text>
                </View>
                <View style={styles.boostBadge}>
                    <Text style={styles.boostText}>+5% Success</Text>
                </View>

                <Text style={styles.insightTitle}>Micro-Adjustment</Text>
                <Text style={styles.insightText}>
                    If you start your routine <Text style={{ color: Colors.primary }}>10 mins earlier</Text> tomorrow, your projected success rate increases significantly based on your historical energy levels.
                </Text>

                <View style={styles.suggestionRow}>
                    <View style={styles.iconBox}>
                        <Ionicons name="time-outline" size={24} color={Colors.primary} />
                    </View>
                    <View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeLabel}>Current Start</Text>
                            <Text style={styles.timeValue}>7:00 AM</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={[styles.timeLabel, { color: Colors.primary }]}>Suggested</Text>
                            <Text style={[styles.timeValue, { color: Colors.primary }]}>6:50 AM</Text>
                        </View>
                    </View>
                </View>

                <Pressable style={styles.acceptButton}>
                    <Text style={styles.acceptButtonText}>Accept Adjustment</Text>
                </Pressable>
            </View>

            <Pressable style={styles.logButton}>
                <Ionicons name="create-outline" size={20} color="white" />
                <Text style={styles.logButtonText}>Log Today's Progress</Text>
            </Pressable>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#231d19',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    goalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    circularContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    circleOuter: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 10,
        borderColor: Colors.primary, // Should be partial circle ideally
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#444',
        borderBottomColor: '#444',
        transform: [{ rotate: '-45deg' }] // Rotate to look like gauge
    },
    circleInner: {
        transform: [{ rotate: '45deg' }], // Rotate back
        alignItems: 'center',
    },
    likelihoodLabel: {
        color: '#aaa',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
    },
    percentage: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#332a24',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginTop: 5,
    },
    badgeText: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
    trendContainer: {
        marginBottom: 20,
    },
    trendHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    trendValue: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#888',
        fontSize: 12,
        marginBottom: 10,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
        backgroundColor: '#2a221d', // Slightly different background
        paddingRight: 0,
    },
    insightCard: {
        backgroundColor: '#2a221d',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    boostBadge: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#3d332a',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    boostText: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
    insightTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    insightText: {
        color: '#ccc',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 20,
    },
    suggestionRow: {
        flexDirection: 'row',
        backgroundColor: '#1e1815',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        gap: 15,
        alignItems: 'center',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3d2b1f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginBottom: 2,
    },
    timeLabel: {
        color: '#888',
        fontSize: 12,
    },
    timeValue: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    acceptButton: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
    },
    acceptButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    logButton: {
        backgroundColor: '#2a221d',
        paddingVertical: 15,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    logButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Analytics;
