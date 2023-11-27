import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CompraFeita = () => {
  return (
    <View style={styles.comprafeita}>
      <Image
        style={[styles.confirmed1Icon, styles.confirmed1IconPosition]}
        contentFit="cover"
        source={require("../assets/confirmed-1.png")}
      />
      <Text style={[styles.compraFeitaCom, styles.confirmed1IconPosition]}>
        Compra feita com sucesso
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmed1IconPosition: {
    left: "50%",
    position: "absolute",
  },
  confirmed1Icon: {
    marginTop: -175,
    marginLeft: -150,
    top: "50%",
    width: 300,
    height: 350,
    overflow: "hidden",
  },
  compraFeitaCom: {
    marginLeft: -148,
    top: 115,
    fontSize: FontSize.normalFont_size,
    fontFamily: FontFamily.normalFont,
    color: Color.colorBlack,
    textAlign: "center",
    width: 296,
    height: 65,
  },
  comprafeita: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default CompraFeita;
