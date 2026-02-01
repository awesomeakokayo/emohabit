import { Image, View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from '../../constants/Colors';

const Sleep = () => {
  const router = useRouter();
  const [wakeTime, setWakeTime] = useState(new Date(new Date().setHours(7, 0, 0, 0)));
  const [sleepTime, setSleepTime] = useState(new Date(new Date().setHours(22, 30, 0, 0)));
  const [showWakePicker, setShowWakePicker] = useState(false);
  const [showSleepPicker, setShowSleepPicker] = useState(false);

  const onWakeChange = (event: any, selectedDate?: Date) => {
    setShowWakePicker(Platform.OS === 'ios');
    if (selectedDate) setWakeTime(selectedDate);
  };

  const onSleepChange = (event: any, selectedDate?: Date) => {
    setShowSleepPicker(Platform.OS === 'ios');
    if (selectedDate) setSleepTime(selectedDate);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Ensure this image path is correct, previously it was sleep.svg */}
        <Image style={styles.image} source={require("../../assets/images/sleep.svg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>First the basics.</Text>
        <Text style={styles.description}>To run efficiently, you need to recharge. When do you usually shut down and power up?</Text>
      </View>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerRow}>
          <Text style={styles.label}>Wake-up time</Text>
          {Platform.OS === 'android' && (
            <Pressable onPress={() => setShowWakePicker(true)} style={styles.timeButton}>
              <Text style={styles.timeText}>{formatTime(wakeTime)}</Text>
            </Pressable>
          )}
          {(showWakePicker || Platform.OS === 'ios') && (
            <DateTimePicker
              testID="wakeTimePicker"
              value={wakeTime}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={onWakeChange}
              themeVariant="dark" // For iOS dark mode
            />
          )}
        </View>

        <View style={styles.pickerRow}>
          <Text style={styles.label}>Sleep time</Text>
          {Platform.OS === 'android' && (
            <Pressable onPress={() => setShowSleepPicker(true)} style={styles.timeButton}>
              <Text style={styles.timeText}>{formatTime(sleepTime)}</Text>
            </Pressable>
          )}
          {(showSleepPicker || Platform.OS === 'ios') && (
            <DateTimePicker
              testID="sleepTimePicker"
              value={sleepTime}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={onSleepChange}
              themeVariant="dark"
            />
          )}
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => router.push('/Welcome/goal')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blackishOrange, // The requested #261C15
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 40,
    gap: 20,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 15,
    borderRadius: 12,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  timeButton: {
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
  },
  timeText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default Sleep
