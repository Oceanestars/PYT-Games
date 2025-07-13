import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  gridButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#ec8f7f",
    width: "22%",
    height: 60,
    margin: 4,
    marginBottom: 15,
  },
  gridButtonPressed: {
    backgroundColor: "#f5c6bf",
  },
  gridButtonDisabled: {
    backgroundColor: "dimgrey",
    opacity: 0.3,
  },
  submitButton: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    paddingHorizontal: 7,
    borderRadius: 5,
    elevation: 3,
    width: "35%",
    height: 40,
    margin: "auto",
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  container: {
    flexGrow: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    backgroundColor: "#f5f5f5",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    width: 290,
    height: 120,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalAnswerText: {
    fontWeight: "bold",
  },
});
