import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/welcome.jpeg")}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          top: -150,
        }}
      >
        <View
          style={{
            paddingHorizontal: 22,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: "800",
              color: COLORS.secondary,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            don't buy
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: COLORS.primary,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            adopt
          </Text>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.secondary,
                marginVertical: 4,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Opt for adoption to give a deserving animal
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.secondary,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              a second chance at a loving home
            </Text>
          </View>
          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 22,
              width: 250,
              justifyContent: "center",
              alignItems: "center",
              left: 50,
              borderRadius: 50,
            }}
          />
          <Button
            title="Join As Guest"
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: 22,
              width: 250,
              justifyContent: "center",
              alignItems: "center",
              left: 50,
              borderRadius: 50,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
