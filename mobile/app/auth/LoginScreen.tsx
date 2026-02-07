import { Image, Pressable, StyleSheet, View, Text, TextInput, Alert, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
// import { auth } from '../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setLoading(true);
    try {
      // await auth.register({
      //   fullname,
      //   email,
      //   password
      // });
      Alert.alert('success', 'Log in successful!');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Failed', error.response?.data?.detail || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView contentContainerStyle=
            {styles.scrollContent} style={styles.scrollView}>
            {/* <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#003366" />
            </TouchableOpacity> */}

            <Text style={styles.htext}>What's the plan for today?</Text>

            <View style={{
              gap: 18,
            }}>
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="white" />
                    <TextInput
                      placeholderTextColor="#8c8b8bff"
                      style={styles.input}
                      placeholder='Enter your email'
                      value={email}
                      onChangeText={setEmail}
                      keyboardType='email-address'
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name='lock-closed-outline' size={20} color='white' />
                    <TextInput
                      placeholderTextColor="#8c8b8bff"
                      style={styles.input}
                      placeholder="Create a password" value={password} onChangeText={setPassword} secureTextEntry
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={{
              alignItems: "center",
              gap: 10,
              marginTop: 20,
            }}>
              <Pressable onPress={handleLogin} style={{
                width: '100%',
                backgroundColor: "#FF8A00",
                height: 53,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                  justifyContent: "center",
                }} >Sign In</Text>
              </Pressable>

              <View style={styles.container}>
                <View style={styles.line} />
                <Text style={styles.text}>or sign up with</Text>
                <View style={styles.line} />
              </View>

              <View style={{
                flexDirection: "row",
                gap: 16,
              }}>

                <Pressable style={styles.button}>
                  <Image
                    source={require("../../assets/images/google.svg")}
                    style={{ width: 23, height: 23 }}
                  />
                  <Text style={styles.butttonText}>Google</Text>
                </Pressable>

                <Pressable style={styles.button}>
                  <Image
                    source={require("../../assets/images/apple.svg")}
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={styles.butttonText}> Apple</Text>
                </Pressable>

              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <Link href='/auth/CreateAccount'>
                  <TouchableOpacity>
                    <Text style={styles.linkText}>Sign Up</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231d19',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 32
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  htext: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    height: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  mhtext: {
    color: "#FF8A00",
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 8,
    backgroundColor: "#FF8A00",
  },
  iconContainer: {
    backgroundColor: "#FF8A00",
    padding: 12,
    borderRadius: 999,
    marginBottom: 8,
    height: 53,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  form: {
    gap: 16
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#FF8A00",
    padding: 12,
    borderRadius: 16,
    height: 48,
    borderWidth: 1,
    borderColor: "white",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: "white",
    height: 45,
    width: '100%'
  },
  button: {
    backgroundColor: "inherit",
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    height: 56,
    width: 150,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
  },
  butttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  footerText: {
    color: "white",
  },
  linkText: {
    color: "#FF8A00",
    fontWeight: "medium",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "medium",
    marginBottom: 8,
  },

})
