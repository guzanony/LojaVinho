import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Cadastro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cadastro}>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("TelaCarrinho")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <Text style={styles.faaSeuCadastro}>Faça seu cadastro</Text>
      <View style={[styles.dadospessoais, styles.dadospessoaisPosition]}>
        <View style={[styles.labelsgroup, styles.labelsgroupPosition]}>
          <View style={[styles.labelnomecompleto, styles.emailLayout]}>
            <View style={[styles.nomeCompletoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nomeCompleto, styles.nmeroPosition]}>
                Nome Completo
              </Text>
            </View>
          </View>
          <View style={[styles.email, styles.emailLayout]}>
            <View style={[styles.nomeCompletoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nomeCompleto, styles.nmeroPosition]}>
                E-mail
              </Text>
            </View>
          </View>
          <View style={[styles.endereo, styles.emailLayout]}>
            <View style={[styles.nomeCompletoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nomeCompleto, styles.nmeroPosition]}>
                Endereço
              </Text>
            </View>
          </View>
          <View style={[styles.cpf, styles.cpfLayout]}>
            <View style={[styles.digiteSeuCpfWrapper, styles.cpfLayout]}>
              <Text style={[styles.digiteSeuCpf, styles.nmeroPosition]}>
                Digite seu CPF
              </Text>
            </View>
          </View>
          <View style={[styles.bairro, styles.cpfLayout]}>
            <View style={[styles.digiteSeuCpfWrapper, styles.cpfLayout]}>
              <Text style={[styles.digiteSeuCpf, styles.nmeroPosition]}>
                Bairro
              </Text>
            </View>
          </View>
          <View style={[styles.senha, styles.emailLayout]}>
            <View style={[styles.nomeCompletoWrapper, styles.wrapperBg]}>
              <Text style={[styles.nomeCompleto, styles.nmeroPosition]}>
                Crie uma senha
              </Text>
            </View>
          </View>
          <View style={[styles.numero, styles.cepLayout]}>
            <View style={[styles.nmeroWrapper, styles.cepLayout]}>
              <Text style={[styles.nmero, styles.nmeroPosition]}>Número</Text>
            </View>
          </View>
          <View style={[styles.cep, styles.cepLayout]}>
            <View style={[styles.nmeroWrapper, styles.cepLayout]}>
              <Text style={[styles.nmero, styles.nmeroPosition]}>CEP</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.personalinfo1Icon, styles.labelsgroupPosition]}
          contentFit="cover"
          source={require("../assets/personalinfo-1.png")}
        />
      </View>
      <Pressable
        style={[styles.finalizarcompra, styles.dadospessoaisPosition]}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <View style={[styles.loginlabel, styles.iconLayout]} />
        <Text style={styles.logintxt}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  dadospessoaisPosition: {
    width: 400,
    left: "50%",
    position: "absolute",
  },
  labelsgroupPosition: {
    left: "50%",
    position: "absolute",
  },
  emailLayout: {
    height: 40,
    width: 350,
    left: "50%",
    position: "absolute",
  },
  wrapperBg: {
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  nmeroPosition: {
    color: Color.placeholder,
    fontSize: FontSize.size_mini,
    top: "50%",
    marginTop: -11,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  cpfLayout: {
    width: 220,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  cepLayout: {
    width: 100,
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
  faaSeuCadastro: {
    marginLeft: -117,
    top: 75,
    fontSize: FontSize.normalFont_size,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  nomeCompleto: {
    marginLeft: -160,
  },
  nomeCompletoWrapper: {
    height: 40,
    width: 350,
    left: "50%",
    position: "absolute",
    marginLeft: -175,
  },
  labelnomecompleto: {
    top: 0,
    width: 350,
    marginLeft: -174.5,
  },
  email: {
    top: 60,
    marginLeft: -174.5,
  },
  endereo: {
    top: 180,
    marginLeft: -174.5,
  },
  digiteSeuCpf: {
    marginLeft: -95,
  },
  digiteSeuCpfWrapper: {
    marginLeft: -110,
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  cpf: {
    top: 300,
    marginLeft: -174.5,
  },
  bairro: {
    marginLeft: -175.5,
    top: 240,
  },
  senha: {
    top: 120,
    marginLeft: -174.5,
  },
  nmero: {
    marginLeft: -35,
  },
  nmeroWrapper: {
    marginLeft: -50,
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  numero: {
    marginLeft: 75.5,
    width: 100,
    top: 240,
  },
  cep: {
    marginLeft: 75.5,
    width: 100,
    top: 300,
  },
  labelsgroup: {
    top: 15,
    width: 351,
    height: 340,
    marginLeft: -175,
  },
  personalinfo1Icon: {
    marginLeft: -125,
    top: 407,
    width: 250,
    height: 137,
    overflow: "hidden",
  },
  dadospessoais: {
    marginLeft: -200,
    top: 173,
    height: 550,
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
    left: "43.93%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.branco,
    textAlign: "center",
    position: "absolute",
  },
  finalizarcompra: {
    marginLeft: -203,
    top: 763,
    height: 50,
  },
  cadastro: {
    backgroundColor: Color.background,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cadastro;
