import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TelaCarrinho = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telacarrinho}>
      <Text style={[styles.carrinho, styles.vinhoTypo]}>Carrinho</Text>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <View style={styles.carrinhocontainer}>
        <View style={styles.produtoscarrinho}>
          <View style={styles.valorproduto}>
            <Image
              style={[styles.santaLuciaCabernet1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/Santa-Lucia-Cabernet.png")}
            />
            <View style={[styles.productinfo, styles.productinfoPosition]}>
              <Text style={[styles.vinhoSantaLucia, styles.r7300Position]}>
                Vinho Santa Lucia
              </Text>
              <Text style={[styles.r4300, styles.textTypo]}>R$43,00</Text>
            </View>
            <View style={[styles.addtoggle, styles.addtogglePosition]}>
              <View style={[styles.aumentar, styles.aumentarFlexBox]}>
                <Image
                  style={[styles.deleteIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/delete.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo]}>1</Text>
                </View>
                <Image
                  style={styles.addIcon}
                  contentFit="cover"
                  source={require("../assets/add.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.valorproduto1, styles.valorprodutoPosition]}>
            <View style={[styles.productinfo1, styles.addtogglePosition]}>
              <Text style={[styles.r7300, styles.textTypo]}>R$73,00</Text>
            </View>
            <Image
              style={styles.codiciPrimitivoDiManduria2Icon}
              contentFit="cover"
              source={require("../assets/CODICI-PRIMITIVO-DI-MANDURIA.png")}
            />
            <View style={[styles.addtoggle, styles.addtogglePosition]}>
              <View style={[styles.aumentar, styles.aumentarFlexBox]}>
                <Image
                  style={[styles.deleteIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/delete.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo]}>1</Text>
                </View>
                <Image
                  style={styles.addIcon}
                  contentFit="cover"
                  source={require("../assets/add.png")}
                />
              </View>
            </View>
            <Text
              style={[styles.vinhoCodiciMasserie, styles.valortotalPosition]}
            >{`Vinho Codici Masserie 
Primitivo di Manduria`}</Text>
          </View>
          <View style={[styles.valorproduto2, styles.valorprodutoPosition]}>
            <View style={[styles.productinfo2, styles.productinfo2Layout]}>
              <Text
                style={[
                  styles.corbelliMontepulciano,
                  styles.productinfo2Layout,
                ]}
              >
                Corbelli Montepulciano
              </Text>
              <Text style={[styles.r4300, styles.textTypo]}>R$48,00</Text>
            </View>
            <Image
              style={[
                styles.corbelliMontepulcianoDabruzzIcon,
                styles.iconLayout1,
              ]}
              contentFit="cover"
              source={require("../assets/Corbelli-Montepulciano-DAbruzzo.png")}
            />
            <View style={[styles.addtoggle, styles.addtogglePosition]}>
              <View style={[styles.aumentar, styles.aumentarFlexBox]}>
                <Image
                  style={[styles.deleteIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/delete.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo]}>1</Text>
                </View>
                <Image
                  style={styles.addIcon}
                  contentFit="cover"
                  source={require("../assets/add.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.valorproduto3, styles.valorprodutoPosition]}>
            <View style={[styles.productinfo3, styles.productinfoPosition]}>
              <Text style={[styles.vinhoSantaLucia, styles.r7300Position]}>
                Luigi Bosca Cabernet
              </Text>
              <Text style={[styles.r4300, styles.textTypo]}>R$85,00</Text>
            </View>
            <View style={[styles.addtoggle, styles.addtogglePosition]}>
              <View style={[styles.aumentar, styles.aumentarFlexBox]}>
                <Image
                  style={[styles.deleteIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/delete.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo]}>1</Text>
                </View>
                <Image
                  style={styles.addIcon}
                  contentFit="cover"
                  source={require("../assets/add.png")}
                />
              </View>
            </View>
            <Image
              style={[
                styles.luigiBoscaCabernetSauvignonIcon,
                styles.iconLayout1,
              ]}
              contentFit="cover"
              source={require("../assets/Luigi-Bosca-Cabernet-Sauvignon.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.add1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </View>
      <View style={[styles.totalcontainer, styles.totalcontainerPosition]}>
        <View style={[styles.valortotal, styles.valortotalPosition]}>
          <Text style={[styles.valorTotal, styles.textTypo]}>Valor Total:</Text>
          <Text style={[styles.r24900, styles.textTypo]}>R$249,00</Text>
        </View>
      </View>
      <Pressable
        style={[styles.finalizarcompra, styles.totalcontainerPosition]}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <View style={[styles.loginlabel, styles.iconLayout2]} />
        <Text style={styles.logintxt}>Ir para pagamento</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vinhoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iconLayout1: {
    height: 100,
    position: "absolute",
  },
  productinfoPosition: {
    height: 112,
    left: 114,
    top: 19,
  },
  r7300Position: {
    left: 0,
    top: 0,
    color: Color.colorBlack,
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
  },
  addtogglePosition: {
    top: 108,
    height: 23,
    position: "absolute",
  },
  aumentarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  valorprodutoPosition: {
    marginLeft: -176.5,
    height: 150,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  valortotalPosition: {
    top: 15,
    position: "absolute",
  },
  productinfo2Layout: {
    width: 236,
    position: "absolute",
  },
  totalcontainerPosition: {
    height: 50,
    width: 400,
    marginLeft: -200,
    left: "50%",
    position: "absolute",
  },
  carrinho: {
    marginLeft: -55,
    top: 75,
    fontSize: FontSize.normalFont_size,
    color: Color.colorBlack,
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
  santaLuciaCabernet1Icon: {
    marginTop: -50,
    marginLeft: -150,
    top: "50%",
    width: 50,
    left: "50%",
  },
  vinhoSantaLucia: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    position: "absolute",
  },
  r4300: {
    top: 89,
    left: 150,
    color: Color.colorBlack,
    position: "absolute",
  },
  productinfo: {
    width: 209,
    position: "absolute",
  },
  deleteIcon: {
    borderRadius: Border.br_6xl,
  },
  text: {
    left: 8,
    color: Color.textColor,
    top: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  wrapper: {
    width: 20,
    marginLeft: 1,
    height: 23,
  },
  addIcon: {
    width: 25,
    height: 25,
    marginLeft: 1,
    borderRadius: Border.br_6xl,
    overflow: "hidden",
  },
  aumentar: {
    top: -1,
    left: -12,
    position: "absolute",
  },
  addtoggle: {
    left: 126,
    width: 67,
    height: 23,
  },
  valorproduto: {
    marginLeft: -173.5,
    height: 150,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  r7300: {
    left: 0,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  productinfo1: {
    left: 264,
    width: 58,
    height: 23,
  },
  codiciPrimitivoDiManduria2Icon: {
    top: 24,
    left: 23,
    height: 101,
    width: 50,
    position: "absolute",
  },
  vinhoCodiciMasserie: {
    left: 112,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    color: Color.colorBlack,
  },
  valorproduto1: {
    top: 170,
  },
  corbelliMontepulciano: {
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
  },
  productinfo2: {
    height: 112,
    left: 114,
    top: 19,
  },
  corbelliMontepulcianoDabruzzIcon: {
    top: 27,
    left: 21,
    width: 51,
  },
  valorproduto2: {
    top: 340,
  },
  productinfo3: {
    width: 212,
    position: "absolute",
  },
  luigiBoscaCabernetSauvignonIcon: {
    top: 25,
    left: 19,
    width: 50,
  },
  valorproduto3: {
    top: 510,
  },
  produtoscarrinho: {
    marginLeft: -178,
    top: 22,
    width: 353,
    height: 660,
    left: "50%",
    position: "absolute",
  },
  add1Icon: {
    top: 195,
    left: 334,
    position: "absolute",
  },
  carrinhocontainer: {
    top: 133,
    height: 500,
    width: 400,
    marginLeft: -200,
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    left: "50%",
    position: "absolute",
  },
  valorTotal: {
    color: Color.colorBlack,
  },
  r24900: {
    marginLeft: 196,
    color: Color.colorBlack,
  },
  valortotal: {
    marginLeft: -174,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
  },
  totalcontainer: {
    top: 653,
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    height: 50,
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
    left: "26.68%",
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.branco,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  finalizarcompra: {
    top: 753,
  },
  telacarrinho: {
    backgroundColor: Color.background,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaCarrinho;
