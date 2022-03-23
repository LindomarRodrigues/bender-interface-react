import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15202B",
    width: "100%",
    height: "100%",
  },
  logo: {
    height: "55%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: "37%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputBox: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#C7CDCD",
    borderBottomWidth: 1,
    height: 50,
  },
  input: {
    color: "#fff",
    fontSize: 18,
    height: "100%",
    width: "100%",
  },
  button: {
    width: "85%",
    height: 50,
    backgroundColor: "#1D9BF0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
  },
  select:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  select:{
    marginTop: 20,
    height: "100%",
    width: "100%"
  },
  picker:{
    color: "#C7CDCD",
    fontSize: 18,
    marginVertical: 30,
    width: 300,
    borderWidth: 1,
    borderColor: "#666",
  }
});

export default styles;