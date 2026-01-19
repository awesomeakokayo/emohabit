import { Pressable, Image, View, Text } from 'react-native'
import React from 'react'

const goal = () => {
  return (
    <View>
      <View>
        <Image source={require("../../assets/images/goal.svg")}/>
      </View>
      <View>
        <h1>What are we chasing</h1>
      </View>
      <View>
        <Text>
            Pick your primary focus right now. Don't worry, we can add more later.
        </Text>
      </View>
      <View>
        <Pressable>
            <Image source={require("../../assets/images/barbell.svg")}/>
            <View>
                <Text>Fitness (Get stronger)</Text>
            </View>
        </Pressable>
        <Pressable>
            <Image source={require("../../assets/images/barbell.svg")}/>
            <View>
                <Text>Learning (New skill)</Text>
            </View>
        </Pressable>
        <Pressable>
            <Image source={require("../../assets/images/barbell.svg")}/>
            <View>
                <Text>Balance (Mental health)</Text>
            </View>
        </Pressable>
        <Pressable>
            <Image source={require("../../assets/images/barbell.svg")}/>
            <View>
                <Text>Deep Work(Career)</Text>
            </View>
        </Pressable>
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
        }}>Next</button>
      </View>
    </View>
  )
}

export default goal