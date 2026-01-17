import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'

const createaccount = () => {
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
      <Text style={styles.htext}>Make the most of your time!</Text>


      <View style={{
        gap: 18,
      }}>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Full name</Text>
          <TextInput style={styles.inputbox}/>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Email</Text>
          <TextInput style={styles.inputbox}/>
        </View>
        <View style={styles.inputcontainer}>
          <label htmlFor="password" style={styles.labeltext}>Password</label>
          <TextInput style={styles.inputbox}/>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.labeltext}>Confirm Password</Text>
          <TextInput style={styles.inputbox}/>
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
        <Text style={styles.labeltext}>or sign up with</Text>
        <View style={{
          flexDirection: "row",
          gap: 12, 
        }}>
          <button style={styles.buttonbox}>Google</button>
          <button style={styles.buttonbox}>Apple</button>
        </View>
        <Text style={{
          color: "white",
        }}>Already have an account?
          <a href="" style={{
            color: "#FF8A00",
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
    alignItems: "flex-start"
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#1E1E1E",
    height: 53,
    borderRadius: 25,
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
  inputcontainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: 335,
    height: 75,
    gap: 4,
  }

})

export default createaccount