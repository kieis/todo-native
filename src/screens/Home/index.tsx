import { useState } from "react";
import { FlatList, View } from "react-native";
import { TaskData } from "../../@types/task";
import EmptyTask from "../../components/EmptyTask";
import Header from "../../components/Header";
import InputAddTask from "../../components/InputAddTask";
import Task from "../../components/Task";
import TaskCard from "../../components/TaskCard";
import { styles } from "./styles";

export default function Home({}) {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const getCreatedTasksCount = () => tasks.length;

  const getFinishedTasksCount = () =>
    tasks.filter((task) => task.isChecked === true).length;

  function handleAddTask(task: TaskData) {
    const taskExist = tasks.find(
      (current) => current.description === task.description
    );
    if (taskExist) {
      return;
    }

    setTasks((prevState) => [...prevState, task]);
  }

  function handleRemoveTask(task: TaskData) {
    const filter = tasks.filter(
      (current) => current.description !== task.description
    );

    setTasks([...filter]);
  }

  function handleCheckTask(task: TaskData) {
    const taskExist = tasks.find(
      (current) => current.description === task.description
    );
    if (!taskExist) {
      return;
    }

    taskExist.isChecked = !taskExist.isChecked;

    const filter = tasks.filter(
      (current) => current.description !== task.description
    );

    setTasks([...filter, taskExist]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <InputAddTask onAdd={handleAddTask} />
      <View style={styles.content}>
        <Task
          createdTasksCount={getCreatedTasksCount()}
          finishedTasksCount={getFinishedTasksCount()}
        />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onCheck={handleCheckTask}
              onRemove={handleRemoveTask}
            />
          )}
          keyExtractor={(item) => item.description}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => <EmptyTask />}
        />
      </View>
    </View>
  );
}
