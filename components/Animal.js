import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import COLORS from "../constants/colors";

const Animal = () => {
  const initialCategoriesData = [
    {
      name: "cat",
      image: require("../assets/cat_1.png"),
      phone: "962781586580",
    },
    {
      name: "dog",
      image: require("../assets/cat_2.png"),
      phone: "962781586580",
    },
    {
      name: "birds",
      image: require("../assets/cat_3.png"),
      phone: "962781586580",
    },
    {
      name: "fish",
      image: require("../assets/cat_4.png"),
      phone: "962781586580",
    },
    {
      name: "cat_5",
      image: require("../assets/cat_5.png"),
      phone: "962781586580",
    },
    {
      name: "cat_6",
      image: require("../assets/cat_5.png"),
      phone: "962781586580",
    },
    {
      name: "cat_7",
      image: require("../assets/cat_7.png"),
      phone: "962781586580",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.AnimalName}>name: {item.name} </Text>
      <Text>phoneNum:{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={initialCategoriesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.oldLace,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: COLORS.bone,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 220,
    height: 250,
    marginBottom: 10,
    borderWidth: 3,
    borderRadius: 20,
    marginTop: 7,
  },
  AnimalName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerTitle: {
    flexDirection: "row",
    left: 10,
    top: 10,
    marginBottom: 5,
  },
});

export default Animal;
