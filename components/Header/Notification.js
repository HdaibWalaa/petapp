import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";


const Notification = () => {
  return (
    <TouchableOpacity>
      <MaterialIcons name="circle-notifications" size={35} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
  
   
  },
});

export default Notification;
