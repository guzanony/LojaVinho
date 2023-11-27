import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ErrorNaCompra = () => {
  return (
    <View style={styles.errorNaCompra}>
      <Text style={[styles.noFoiPossvel, styles.cancel1IconPosition]}>
        Não foi possível confirmar sua compra
      </Text>
      <Image
        style={[styles.cancel1Icon, styles.cancel1IconPosition]}
        contentFit="cover"
        source={require("../assets/cancel-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cancel1IconPosition: {
    left: "50%",
    position: "absolute",
  },
  noFoiPossvel: {
    marginLeft: -148,
    top: 115,
    fontSize: FontSize.normalFont_size,
    fontFamily: FontFamily.normalFont,
    color: Color.colorBlack,
    textAlign: "center",
    width: 296,
    height: 65,
  },
  cancel1Icon: {
    marginTop: -175,
    marginLeft: -175,
    top: "50%",
    width: 350,
    height: 350,
    overflow: "hidden",
  },
  errorNaCompra: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ErrorNaCompra;
