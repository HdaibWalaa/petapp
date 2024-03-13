import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
      >
        <View style={styles.backButton}>
          <AntDesign name="caretleft" size={30} color="#697579" />
        </View>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/login.png")} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputField}>
          <View style={{ marginVertical: 22, marginTop: -5, left: 5 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
              }}
            >
              Hi Welcome Back!👋
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              Hello again you have been missed!
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="key"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="grey"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}> Forget Password ? </Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              title={
                <Text style={{ color: COLORS.white, fontWeight: "500" }}>
                  LogIn
                </Text>
              }
              onPress={() => navigation.navigate("Login")}
              style={{
                backgroundColor: COLORS.primary,
              }}
            />
            <Text style={styles.orText}> OR </Text>
            <Button
              title={
                <Text style={{ color: COLORS.white, fontWeight: "500" }}>
                  Continue with Email
                </Text>
              }
              onPress={() => navigation.navigate("Login")}
              style={{
                backgroundColor: COLORS.primary,
              }}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.signupText}>
              Don 't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAF0F8",
  },
  goBackButton: {
    position: "absolute",
    top: 80,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    height: 350,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    marginTop: -100,
    paddingTop: 40,
    paddingBottom: 30,
  },
  inputField: {
    width: "90%",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    padding: 10,
  },
  forgotPasswordText: {
    textAlign: "left",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  signupText: {
    textAlign: "center",
    marginTop: 30,
  },
});

export default Login;
