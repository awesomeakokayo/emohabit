import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const Login = () => {
  const router = useRouter();
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.htext}>Welcome Back!</Text>

      <View style={{ gap: 18 }}>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Email</Text>
          <TextInput
            style={[styles.inputbox, focused && styles.focusedInput]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="johndoe@email.com"
            placeholderTextColor="#757575"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Password</Text>
          <TextInput
            style={[styles.inputbox, focused && styles.focusedInput]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            secureTextEntry
          />
        </View>
      </View>

      <View style={{ alignItems: "center", gap: 10, margin: 20 }}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
          onPress={() => router.push('/Welcome/intro')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.text}>or sign in with</Text>
          <View style={styles.line} />
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable style={styles.buttonbox}>
            {/* Ensure google.svg exists or remove image if creating error */}
            <Text style={styles.socialText}>Google</Text>
          </Pressable>
          <Pressable style={styles.buttonbox}>
            <Text style={styles.socialText}>Apple</Text>
          </Pressable>
        </View>

        <Text style={{ color: "white", marginTop: 50 }}>
          Don't have an account?
          <Text
            style={{ color: "#FF8A00", fontWeight: 'bold' }}
            onPress={() => router.push('/auth/createaccount')}
          > Sign up</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  htext: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  labeltext: {
    color: "#C9C9C9",
    fontSize: 13,
    marginBottom: 5,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1E1E1E",
    height: 53,
    borderRadius: 25,
    color: "white",
    padding: 20,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#FF8A00",
  },
  inputcontainer: {
    width: 335,
    marginBottom: 10,
  },
  button: {
    width: 335,
    backgroundColor: "#FF8A00",
    height: 53,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    width: 328,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ffff",
  },
  text: {
    marginHorizontal: 12,
    fontSize: 14,
    color: "#ffff",
  },
  buttonbox: {
    height: 50,
    width: 158,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1E1E1E",
    borderColor: "white",
    borderWidth: 1,
  },
  socialText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Login
