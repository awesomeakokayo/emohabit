import { Pressable, Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const Intro = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Note: Ensure the image exists at this path or update it */}
        <Image style={styles.image} source={require("../../assets/images/intropage.svg")} />
        <Text style={styles.title}>Let's build your blueprint.</Text>
        <Text style={styles.subtitle}>I need to know your rhythm to design the perfect day.</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => router.push('/Welcome/sleep')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E", // Keep original dark background or use Colors.dark.background
    padding: 20,
  },
  content: {
    gap: 15,
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 95,
    height: 180,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    maxWidth: '80%',
  },
  button: {
    width: 335,
    backgroundColor: Colors.primary,
    height: 53,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  }
});

export default Intro
