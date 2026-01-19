import { Image, StyleSheet, View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

const login = () => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Text style={styles.htext}>What's the plan for today?</Text>


      <View style={{
        gap: 18,
      }}>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Email</Text>
          <TextInput
            style={[
              styles.inputbox,
              focused && styles.focusedInput,
            ]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="johndoe@email.com"
            placeholderTextColor="#757575"
          />
        </View>
        <View style={styles.inputcontainer}>
          <label htmlFor="password" style={styles.labeltext}>Password</label>
          <TextInput
            style={[
              styles.inputbox,
              focused && styles.focusedInput,
            ]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </View>
        
      </View>

      <View style={{
        alignItems: "center",
        gap: 10,
        margin: 20,
      }}>
        <button style={{
          width: 335,
          background: "#FF8A00",
          height: 53,
          borderRadius: 25,
          color: "white",
          border: "none",
          fontSize: 22,
          fontWeight: "mediumb",
        }}>Sign up</button> 
        <View style={styles.container}>
          <View style={styles.line} />
          <Text style={styles.text}>or sign up with</Text>
          <View style={styles.line} />
        </View>
        <View style={{
          flexDirection: "row",
          gap: 12, 
        }}>
          <button style={styles.buttonbox}> <Image
            source={require("../../assets/images/google.svg")}
            style={{ width: 20, height: 20}}
          /> Google</button>
          <button style={styles.buttonbox}>Apple</button>
        </View>
        <Text style={{
          color: "white",
          marginTop: 50, 
        }}>Already have an account?
          <a href="" style={{
            color: "#FF8A00",
          textDecorationLine: "none"
          }}> Sign in</a>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  htext: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    height: 100,
    width: 300,
    textAlign: "center",
  },
  mhtext: {
    color: "#FF8A00",
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center"
  },
  labeltext: {
    color: "#C9C9C9",
    fontSize: 13,
    alignItems: "flex-start",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through"
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
    fontWeight: "medium",
  },
  buttonbox: {
    height: 50,
    width: 158,
    borderRadius: 25,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#1E1E1E",
    borderColor: "white",
    borderWidth: 1,
  },
  focusedInput: {
    borderColor: "#FF8A00", // active color
  },
  inputcontainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: 335,
    height: 75,
    gap: 4,
  },
  container: {
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
    fontWeight: "regular",
  },

})

export default login