import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    backgroundColor: "#333333",
    minHeight: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  checkbox: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedText: {
    fontSize: 14,
    color: "#808080",
    flex: 1,
    lineHeight: 20,
    marginHorizontal: 14,
    textAlign: "justify",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  uncheckedText: {
    fontSize: 14,
    color: "white",
    flex: 1,
    lineHeight: 20,
    marginHorizontal: 14,
    textAlign: "justify",
  },
  removeButton: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
