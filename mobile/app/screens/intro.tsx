import { Image, Pressable, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Intro() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Image source={require("../../assets/images/vector.svg")}
                        style={{ width: 100, height: 200 }}
                    />
                </View>

                <View>
                    <Text style={styles.htext}>Let's build your blueprint.</Text>
                    <Text style={styles.label}>I need to know your rhythm to design the perfect day.</Text>
                </View>

                <Link href='/Welcome/sleep'>
                    <Pressable style={{
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
                        }} >Start</Text>
                    </Pressable>
                </Link>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#231d19",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 16,
    },
    safeArea: {
        flex: 1,
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
    label: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        marginBottom: 8,
        marginLeft: 4,
    },
})