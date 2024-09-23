import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#4682B4",
  },
  headerContainer: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 8,
  },
  backButton: {
    position: "absolute",
    left: 20,
    padding: 10,
  },
});
