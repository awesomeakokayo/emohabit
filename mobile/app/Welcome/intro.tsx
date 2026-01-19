import { Pressable, Image, View, Text } from 'react-native'
import React from 'react'

const intro = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
    }}>
        <View style={{
            gap: 10,
        }}>
            <Image style={{
            width: 95,
            height: 180,
            }} source={ require("../../assets/images/intropage.svg")}/>
            <Text>Let's build your blueprint.</Text>
            <Text>I need to know your rhythm to design the perfect day.</Text>
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

export default intro