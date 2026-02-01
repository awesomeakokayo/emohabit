import { Pressable, Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const Goal = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/images/goal.svg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What are we chasing</Text>
        <Text style={styles.description}>Pick your primary focus right now. Don't worry, we can add more later.</Text>
      </View>

      <View style={styles.optionsContainer}>
        {[
          { label: 'Fitness (Get stronger)', icon: require("../../assets/images/barbell.svg") },
          { label: 'Learning (New skill)', icon: require("../../assets/images/barbell.svg") }, // Update icons if available
          { label: 'Balance (Mental health)', icon: require("../../assets/images/barbell.svg") },
          { label: 'Deep Work (Career)', icon: require("../../assets/images/barbell.svg") },
        ].map((item, index) => (
          <Pressable key={index} style={styles.optionCard}>
            <Image source={item.icon} style={styles.optionIcon} />
            <Text style={styles.optionText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
          onPress={() => router.push('/Welcome/daysummary')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Or Colors.primary if desired context needs it
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
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
  },
  description: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  optionsContainer: {
    gap: 15,
    marginBottom: 30,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 16,
    gap: 15,
  },
  optionIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.primary,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
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

export default Goal
