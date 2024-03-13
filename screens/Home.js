import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/Header/Header";
import COLORS from "../constants/colors";
import Search from "../components/Search";
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_500Medium,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_800ExtraBold,
  Cairo_900Black,
} from "@expo-google-fonts/cairo";
import Category from "../components/Category";
import Animal from "../components/Animal";

const homepage = () => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_500Medium,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_800ExtraBold,
    Cairo_900Black,
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Search />
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text
              style={{
                fontSize: 30,
                color: COLORS.secondary,
                textTransform: "uppercase",
                fontFamily: "Cairo_900Black",
              }}
            >
              Cat Kitten
            </Text>
            <TouchableOpacity
              style={{
                height: 60,
                width: 150,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: COLORS.white,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.secondary,
                  textTransform: "uppercase",
                  marginTop: 20,
                }}
              >
                Donate Now
              </Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../assets/cat.png")} style={styles.image} />
        </View>
        <Category />
        <Animal />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.oldLace,
  },
  container2: {
    flexDirection: "row",
    backgroundColor: COLORS.bone,
    padding: 20,
    borderRadius: 20,
    margin: 15,
    marginTop: -15,
  },
  image: {
    width: "70%",
    height: 170,
    right: 15,
  },
  container3: {
    alignItems: "center",
    marginTop: 30,
  },
});

export default homepage;
