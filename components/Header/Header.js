import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Profile from "./Profile";
import Notification from "./Notification";
import COLORS from "../../constants/colors";
const Header = () => {
  return (
    <View style={styles.container}>
      <Profile />
      <View style={{ textAlign: "left",right:90,}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          Welcom :
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          Farhan
        </Text>
      </View>
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:20,
    
  },
});

export default Header;
