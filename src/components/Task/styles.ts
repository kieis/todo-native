import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  finishedText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  countText: {
    backgroundColor: "#333333",
    color: "white",
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "bold",
  },
});
