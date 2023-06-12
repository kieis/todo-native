import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TaskData } from "../../@types/task";

interface TaskCardProps {
  task: TaskData;
  onCheck: (task: TaskData) => void;
  onRemove: (task: TaskData) => void;
}

export default function TaskCard({ task, onCheck, onRemove }: TaskCardProps) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkbox} onPress={() => onCheck(task)}>
          <Image
            source={
              task.isChecked
                ? require("../../../assets/checked.svg")
                : require("../../../assets/unchecked.svg")
            }
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        <Text
          style={task.isChecked ? styles.checkedText : styles.uncheckedText}
        >
          {task.description}
        </Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove(task)}
        >
          <Image
            source={require("../../../assets/trash.svg")}
            contentFit="cover"
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
