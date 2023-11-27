import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.home} onPress={() => navigation.navigate("Login")}>
      <View
        style={[
          styles.descubraSaboreieCompartilhParent,
          styles.descubraPosition,
        ]}
      >
        <Text
          style={[styles.descubraSaboreieCompartilh, styles.vinumFlexBox]}
        >{`Descubra,
Saboreie, 
Compartilhe.`}</Text>
        <View style={[styles.logo, styles.descubraPosition]}>
          <Text style={[styles.vinum, styles.vinumFlexBox]}>Vinum</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  descubraPosition: {
    left: "50%",
    position: "absolute",
  },
  vinumFlexBox: {
    textAlign: "left",
    color: Color.branco,
  },
  descubraSaboreieCompartilh: {
    marginLeft: -170,
    top: 59,
    fontSize: 60,
    fontFamily: FontFamily.lobsterTwo,
    left: "50%",
    position: "absolute",
  },
  vinum: {
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.lobsterTwo,
  },
  icon: {
    width: 60,
    height: 60,
    marginLeft: 8,
  },
  logo: {
    marginTop: -59.5,
    marginLeft: -97,
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  descubraSaboreieCompartilhParent: {
    marginLeft: -215,
    top: 0,
    backgroundColor: Color.colorBrown,
    width: 430,
    height: 933,
    overflow: "hidden",
  },
  home: {
    backgroundColor: "#800000",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Home;
