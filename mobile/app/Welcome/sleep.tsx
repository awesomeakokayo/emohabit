import { Image, View, Text } from 'react-native'
import React from 'react'

const sleep = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
    }}>
      <View>
        <Image style={{
            height: 202,
            width: 137,
        }} source={require("../../assets/images/sleep.svg")}/>
      </View>
      <View>
        <h1>First the basics.</h1>
        <Text>To run efficiently, you need to recharge. When do you usually shut down and power up?</Text>
      </View>
      <View>

      </View>
        <button style={{
            width: 335,
            background: "#FF8A00",
            height: 53,
            borderRadius: 25,
            color: "white",
            border: "none",
            fontSize: 22,
            fontWeight: "medium",
            marginBottom: 15,
        }}>Start</button>
        </View>
  )
}

export default sleep