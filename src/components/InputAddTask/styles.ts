import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    height: 54,
    position: "relative",
    top: -26,
  },
  textInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: "#F2F2F2",
    borderRadius: 6,
    backgroundColor: "#262626",
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    marginLeft: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
