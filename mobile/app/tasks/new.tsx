import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewTask = () => {
    const router = useRouter();
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('Focus');
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date(new Date().setHours(new Date().getHours() + 1)));
    const [priority, setPriority] = useState(2); // 0: Low, 1: Medium, 2: High/Critical - mapped to slider 1-4?

    // Screenshot shows High (4) and slider seems to have multiple steps. 
    // Let's assume slider 1-10 or 1-3. 
    // Screenshot: "High (4)" and text labels Low, Medium, Critical.
    // Let's use 1-5 range.

    const categories = [
        { name: 'Focus', icon: 'scan-outline' },
        { name: 'Health', icon: 'heart-outline' },
        { name: 'Chores', icon: 'home-outline' },
        { name: 'Learning', icon: 'school-outline' },
        { name: 'Break', icon: 'cafe-outline' },
    ];

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const [selectedDays, setSelectedDays] = useState([1, 2, 3, 4, 5]); // Mon-Fri default

    const toggleDay = (index: number) => {
        if (selectedDays.includes(index)) {
            setSelectedDays(selectedDays.filter(d => d !== index));
        } else {
            setSelectedDays([...selectedDays, index]);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="close" size={24} color="white" />
                </Pressable>
                <Text style={styles.headerTitle}>New Task</Text>
                <Pressable onPress={() => { /* Save logic */ router.back(); }}>
                    <Text style={styles.saveText}>Save</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.label}>Task Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Morning Meditation"
                    placeholderTextColor="#666"
                    value={taskName}
                    onChangeText={setTaskName}
                />

                <Text style={styles.label}>Category</Text>
                <View style={styles.categoryRow}>
                    {categories.map((cat) => (
                        <Pressable
                            key={cat.name}
                            style={[styles.categoryChip, category === cat.name && styles.categoryChipActive]}
                            onPress={() => setCategory(cat.name)}
                        >
                            <Ionicons name={cat.icon as any} size={16} color={category === cat.name ? 'white' : '#aaa'} />
                            <Text style={[styles.categoryText, category === cat.name && styles.categoryTextActive]}>{cat.name}</Text>
                        </Pressable>
                    ))}
                </View>

                <Text style={styles.label}>Schedule</Text>
                <View style={styles.scheduleRow}>
                    <View style={styles.timeBox}>
                        <Pressable onPress={() => setShowStartPicker(true)}>
                            <Text style={styles.timeLabel}>START</Text>
                            <Text style={styles.timeValue}>{formatTime(startTime)}</Text>
                        </Pressable>
                        {showStartPicker && (
                            <DateTimePicker
                                value={startTime}
                                mode="time"
                                display="default"
                                onChange={(e, d) => { setShowStartPicker(Platform.OS === 'ios'); if (d) setStartTime(d); }}
                            />
                        )}
                    </View>
                    <View style={styles.timeBox}>
                        <Pressable onPress={() => setShowEndPicker(true)}>
                            <Text style={styles.timeLabel}>END</Text>
                            <Text style={styles.timeValue}>{formatTime(endTime)}</Text>
                        </Pressable>
                        {showEndPicker && (
                            <DateTimePicker
                                value={endTime}
                                mode="time"
                                display="default"
                                onChange={(e, d) => { setShowEndPicker(Platform.OS === 'ios'); if (d) setEndTime(d); }}
                            />
                        )}
                    </View>
                </View>

                <View style={styles.repeatContainer}>
                    <View style={styles.repeatHeader}>
                        <Text style={styles.labelNoMargin}>Repeat</Text>
                        <Text style={styles.weekdaysText}>Weekdays</Text>
                    </View>
                    <View style={styles.daysRow}>
                        {weekDays.map((day, index) => (
                            <Pressable
                                key={index}
                                style={[styles.dayCircle, selectedDays.includes(index) && styles.dayCircleActive]}
                                onPress={() => toggleDay(index)}
                            >
                                <Text style={[styles.dayText, selectedDays.includes(index) && styles.dayTextActive]}>{day}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                <View style={styles.priorityContainer}>
                    <View style={styles.priorityHeader}>
                        <Text style={styles.labelNoMargin}>Priority Level</Text>
                        <Text style={styles.priorityValue}>High ({Math.round(priority)})</Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            value={priority}
                            onValueChange={setPriority}
                            minimumTrackTintColor={Colors.primary}
                            maximumTrackTintColor="#444"
                            thumbTintColor="white"
                        />
                        <View style={styles.sliderLabels}>
                            <Text style={styles.sliderLabel}>Low</Text>
                            <Text style={styles.sliderLabel}>Medium</Text>
                            <Text style={styles.sliderLabel}>Critical</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.saveButton} onPress={() => { router.back(); }}>
                    <Ionicons name="checkmark" size={24} color="white" />
                    <Text style={styles.saveButtonText}>Save Task</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#231d19', // Slightly lighter/brownish dark
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    saveText: {
        color: '#aaa',
        fontSize: 16,
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    label: {
        color: '#aaa',
        fontSize: 14,
        marginBottom: 10,
        marginTop: 20,
    },
    labelNoMargin: {
        color: '#aaa',
        fontSize: 14,
    },
    input: {
        backgroundColor: '#332a24',
        borderRadius: 12,
        padding: 15,
        color: 'white',
        fontSize: 16,
    },
    categoryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    categoryChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#332a24',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 5,
    },
    categoryChipActive: {
        backgroundColor: Colors.primary,
    },
    categoryText: {
        color: '#aaa',
        fontWeight: '600',
    },
    categoryTextActive: {
        color: 'white',
    },
    scheduleRow: {
        flexDirection: 'row',
        gap: 15,
    },
    timeBox: {
        flex: 1,
        backgroundColor: '#332a24',
        padding: 15,
        borderRadius: 12,
    },
    timeLabel: {
        color: '#aaa',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    timeValue: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    repeatContainer: {
        backgroundColor: '#332a24',
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
    },
    repeatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    weekdaysText: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    daysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#231d19',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayCircleActive: {
        backgroundColor: Colors.primary,
    },
    dayText: {
        color: '#aaa',
        fontWeight: 'bold',
    },
    dayTextActive: {
        color: 'black', // Or white based on contrast
    },
    priorityContainer: {
        marginTop: 20,
    },
    priorityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    priorityValue: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    sliderContainer: {
        backgroundColor: '#332a24',
        borderRadius: 12,
        padding: 15,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    sliderLabel: {
        color: '#666',
        fontSize: 12,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 16,
        gap: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default NewTask;
