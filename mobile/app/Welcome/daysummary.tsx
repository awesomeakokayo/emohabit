import { Image, TextInput, Pressable, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const DaySummary = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/images/daysummary.svg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Walk me through your day</Text>
        <Text style={styles.description}>Please describe your regular daily routine and the times you do each activity.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='e.g., Wake 7:00 • Commute 8:00–9:00 • Work 9:00–17:00'
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
          onPress={() => router.push('/Welcome/recommendation')}
        >
          <Text style={styles.buttonText}>Create routine</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackishOrange, // Requested blackish orange
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 15,
    minHeight: 150,
    marginBottom: 30,
  },
  input: {
    color: 'white',
    fontSize: 16,
    textAlignVertical: 'top',
    height: '100%',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
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

export default DaySummary
