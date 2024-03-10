import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,

  },
  inputContainer: {
    height:60,
    flexDirection: "row",
    alignItems: "center",
    borderRadius:10,
    marginBottom: 20,
    marginTop:-20,
    backgroundColor:COLORS.white,
  },
  textInput: {
    flex: 1,
    height: 40,
   
  },
  icon: {
    padding: 10,
  },
});

export default Search;
