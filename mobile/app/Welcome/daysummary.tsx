import { Image, TextInput, Pressable, View, Text } from 'react-native'
import React from 'react'

const daysummary = () => {
  return (
    <View>
      <View>
        <Image source={require("../../assets/images/daysummary.svg")}/>
      </View>
      <View>
        <h1>Walk me through your day</h1>
        <Text>Please describe your regular daily routine and the times you do each activity.</Text>
      </View>
      <View>
        <TextInput placeholder='e.g., Wake 7:00 • Commute 8:00–9:00 • Work 9:00–17:00 '>

        </TextInput>
      </View>
        <View>
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
            }}>Create routine</button>
        </View>
    </View>
  )
}

export default daysummary