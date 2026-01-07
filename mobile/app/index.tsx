import { StyleSheet, Dimensions, Image, Text, View } from "react-native";
import { images } from "@/assets/images"; 

const { height } = Dimensions.get("window");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Image style={styles.emo} source={images.welcome} />
      <Text style={styles.texts}>Better Routine = Better Life</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texts: {
    color: "white",
    alignItems: "center",
    marginTop: 85,
    fontWeight: "semibold",
    fontSize: 22,
  },
  emo: {
    height: height * 0.47,
  },
});