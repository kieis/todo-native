import { Image } from "expo-image";
import { TextInput, TouchableOpacity, View } from "react-native";
import { TaskData } from "../../@types/task";
import { useState } from "react";
import { styles } from "./styles";

interface InputAddTaskProps {
  onAdd: (data: TaskData) => void;
}

export default function InputAddTask({ onAdd }: InputAddTaskProps) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onAdd({ description: text, isChecked: false });
          setText("");
        }}
      >
        <Image
          source={require("../../../assets/plus.svg")}
          style={{ width: 16, height: 16 }}
        />
      </TouchableOpacity>
    </View>
  );
}
