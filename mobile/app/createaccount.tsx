import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const createaccount = () => {
  return (
    <View>
      <Text style={styles.htext}>Make the most of your time</Text>
      <Text style={styles.mhtext}>Create an account</Text>
      <div>
        <button style={styles.buttontext}>Google</button>
        <button style={styles.buttontext}>Apple</button>
      </div>
      <Text style={styles.labeltext}>or sign up with</Text>
      
      <div>
        <label htmlFor="fullName" style={styles.labeltext}>Full name</label>
        <input className='fullname' type="text"/>
        <label htmlFor="email" style={styles.labeltext}>Email</label>
        <input className='email' type="email"/>
        <label htmlFor="password" style={styles.labeltext}>Password</label>
        <input className='password' type="password"/>
        <label htmlFor="confirmPassword" style={styles.labeltext}>Confirm Password</label>
        <input className='confirmPassword' type="password"/>
      </div>

      <div>
        <button>Sign up</button>
        <Text>Already have an account? 
            <a href="">Sign in</a>
        </Text>
      </div>
    </View>
  )
}

const styles = StyleSheet.create({
    htext: {
        color: "white",
        fontSize: 38,
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
    buttontext: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 28
    },
    labeltext: {
        color: "white",
        fontSize: 13,
        alignItems: "flex-start"
    }

})

export default createaccount