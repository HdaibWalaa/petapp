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

const Category = () => {
  const initialCategoriesData = [
    { name: "cat", image: require("../assets/cat_1.png") },
    { name: "dog", image: require("../assets/cat_2.png") },
    { name: "birds", image: require("../assets/cat_3.png") },
    { name: "fish", image: require("../assets/cat_4.png") },
    { name: "cat_5", image: require("../assets/cat_5.png") },
    { name: "cat_6", image: require("../assets/cat_5.png") },
    { name: "cat_7", image: require("../assets/cat_7.png") },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text
          style={{
            fontSize: 20,
            color: COLORS.black,
          }}
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.primary,
              left: 185,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
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
  cardsContainer: {
    marginTop: 20,
  },
  card: {
    width: 120,
    height:100,
    backgroundColor: COLORS.bone,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerTitle: {
    flexDirection: "row",
    left:10,
    top:10,
    marginBottom:5,
  },
});

export default Category;
