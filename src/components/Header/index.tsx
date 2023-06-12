import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 32,
  },
});

export default function Header({}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        contentFit="contain"
        style={styles.image}
      />
    </View>
  );
}
