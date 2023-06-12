import { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskProps {
  createdTasksCount?: number;
  finishedTasksCount?: number;
}

export default function Task({
  createdTasksCount = 0,
  finishedTasksCount = 0,
}: TaskProps) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.createdText}>Criadas</Text>
          <Text style={styles.countText}>{createdTasksCount}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.finishedText}>Concluídas</Text>
          <Text style={styles.countText}>{finishedTasksCount}</Text>
        </View>
      </View>
    </Fragment>
  );
}
