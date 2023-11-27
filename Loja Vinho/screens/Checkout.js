import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CheckOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <Text style={styles.checkout1}>CheckOut</Text>
      <View style={[styles.checkoutcontainer, styles.finalizarcompraPosition]}>
        <View style={[styles.labelsgroup, styles.labelsgroupPosition]}>
          <View
            style={[styles.labelnumerocarto, styles.labelnumerocartoPosition]}
          >
            <View style={[styles.nmeroDoCartoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nmeroDoCarto, styles.nmeroDoCartoPosition]}>
                Número do cartão
              </Text>
            </View>
          </View>
          <View
            style={[styles.labelnumerocarto1, styles.labelnumerocartoPosition]}
          >
            <View style={[styles.nmeroDoCartoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nmeroDoCarto, styles.nmeroDoCartoPosition]}>
                Nome no cartão
              </Text>
            </View>
          </View>
          <View style={[styles.labeldata, styles.labelcvvLayout]}>
            <View style={[styles.dataDeValidadeWrapper, styles.labelcvvLayout]}>
              <Text
                style={[styles.dataDeValidade, styles.nmeroDoCartoPosition]}
              >
                Data de Validade
              </Text>
            </View>
          </View>
          <View style={[styles.labelcvv, styles.labelcvvLayout]}>
            <View style={[styles.dataDeValidadeWrapper, styles.labelcvvLayout]}>
              <Text
                style={[styles.dataDeValidade, styles.nmeroDoCartoPosition]}
              >
                CVC/CVV
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.paymentimg1Icon, styles.labelsgroupPosition]}
          contentFit="cover"
          source={require("../assets/paymentimg-1.png")}
        />
      </View>
      <Pressable
        style={[styles.finalizarcompra, styles.finalizarcompraPosition]}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <View style={[styles.loginlabel, styles.iconLayout]} />
        <Text style={styles.logintxt}>Finalizar Compra</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  finalizarcompraPosition: {
    width: 400,
    marginLeft: -200,
    left: "50%",
    position: "absolute",
  },
  labelsgroupPosition: {
    width: 350,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  labelnumerocartoPosition: {
    height: 40,
    width: 350,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  wrapperBg: {
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  nmeroDoCartoPosition: {
    color: Color.placeholder,
    fontSize: FontSize.size_mini,
    top: "50%",
    marginTop: -11,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  labelcvvLayout: {
    width: 160,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  back1: {
    left: 18,
    top: 20,
    width: 35,
    height: 35,
    position: "absolute",
  },
  checkout1: {
    marginLeft: -62,
    top: 75,
    fontSize: FontSize.normalFont_size,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  nmeroDoCarto: {
    marginLeft: -160,
  },
  nmeroDoCartoWrapper: {
    height: 40,
    width: 350,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  labelnumerocarto: {
    top: 0,
    height: 40,
  },
  labelnumerocarto1: {
    top: 130,
  },
  dataDeValidade: {
    marginLeft: -65,
  },
  dataDeValidadeWrapper: {
    marginLeft: -80,
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  labeldata: {
    top: 65,
    width: 160,
    marginLeft: -175,
  },
  labelcvv: {
    marginLeft: 15,
    top: 65,
    width: 160,
  },
  labelsgroup: {
    top: 15,
    height: 170,
  },
  paymentimg1Icon: {
    top: 235,
    height: 130,
    overflow: "hidden",
  },
  checkoutcontainer: {
    top: 193,
    height: 400,
    overflow: "hidden",
  },
  loginlabel: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(204, 204, 204, 0.25)",
    shadowOffset: {
      width: -1,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    position: "absolute",
  },
  logintxt: {
    top: "24%",
    left: "28.68%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.branco,
    textAlign: "center",
    position: "absolute",
  },
  finalizarcompra: {
    top: 653,
    height: 50,
  },
  checkout: {
    backgroundColor: Color.background,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default CheckOut;
