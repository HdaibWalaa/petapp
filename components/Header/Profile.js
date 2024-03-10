import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
const Profile = () => {
    const IconSize=50;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/hero1.jpg")}
          style={{
            width: IconSize,
            height: IconSize,
            borderRadius: IconSize / 2,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  
  },
});

export default Profile;
