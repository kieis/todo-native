import { Image } from "expo-image";
import { View } from "react-native";
import { styles } from "./styles";

export default function Header({}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.svg")}
        contentFit="contain"
        style={styles.image}
      />
    </View>
  );
}
