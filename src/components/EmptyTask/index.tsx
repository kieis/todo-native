import { Image } from "expo-image";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function EmptyTask() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/clipboard.svg")}
        style={{ width: 56, height: 56 }}
      />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
