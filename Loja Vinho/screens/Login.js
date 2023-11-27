import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={[styles.formloginParent, styles.loginLayout]}>
        <View style={styles.formlogin}>
          <View style={styles.usernamelabel} />
          <View style={[styles.senhalabel, styles.senhalabelLayout]} />
          <Pressable
            style={[styles.loginbutton, styles.senhalabelLayout]}
            onPress={() => navigation.navigate("TelaProdutos")}
          >
            <View style={[styles.loginlabel, styles.senhalabelShadowBox]} />
            <Text style={[styles.logintxt, styles.logintxtTypo]}>Log In</Text>
          </Pressable>
          <View style={[styles.userplaceholder, styles.logoFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={styles.username}>Username</Text>
          </View>
          <View style={[styles.senhaplaceholder, styles.logoFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Text style={styles.username}>Senha</Text>
          </View>
        </View>
        <Text style={[styles.textform, styles.vinumClr]}>
          Entre na sua conta
        </Text>
        <View
          style={[styles.esqueceusenhatxt, styles.esqueceusenhatxtPosition]}
        >
          <Text style={styles.esqueceuSuaSenha}>Esqueceu sua senha?</Text>
          <Image
            style={[
              styles.esqueceusenhatxtChild,
              styles.esqueceusenhatxtPosition,
            ]}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.cadastrolink, styles.cadastrolinkPosition]}>
          <View
            style={[styles.cadastrolinkChild, styles.cadastrolinkPosition]}
          />
          <Text style={[styles.novoPorAqui, styles.textformPosition]}>
            Novo por aqui?, Cadastre-se
          </Text>
        </View>
        <View style={[styles.logo, styles.logoFlexBox]}>
          <Text style={[styles.vinum, styles.vinumClr]}>Vinum</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    overflow: "hidden",
    height: 932,
  },
  senhalabelLayout: {
    marginTop: 30,
    height: 50,
    width: 320,
  },
  senhalabelShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowColor: "rgba(204, 204, 204, 0.25)",
    borderRadius: Border.br_11xl,
  },
  logintxtTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  logoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vinumClr: {
    color: Color.textColor,
    textAlign: "left",
  },
  esqueceusenhatxtPosition: {
    width: 152,
    marginLeft: -76,
    left: "50%",
    position: "absolute",
  },
  cadastrolinkPosition: {
    width: 289,
    marginLeft: -145,
    left: "50%",
    position: "absolute",
  },
  textformPosition: {
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  usernamelabel: {
    zIndex: 0,
    height: 50,
    width: 320,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowColor: "rgba(204, 204, 204, 0.25)",
    backgroundColor: Color.branco,
    borderRadius: Border.br_11xl,
  },
  senhalabel: {
    zIndex: 1,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowColor: "rgba(204, 204, 204, 0.25)",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.branco,
    marginTop: 30,
  },
  loginlabel: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorBrown,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowColor: "rgba(204, 204, 204, 0.25)",
    borderRadius: Border.br_11xl,
    position: "absolute",
    width: "100%",
  },
  logintxt: {
    width: "20.84%",
    top: "24%",
    left: "39.66%",
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.branco,
    textAlign: "left",
    position: "absolute",
  },
  loginbutton: {
    zIndex: 2,
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  username: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.placeholder,
    marginLeft: 15,
    textAlign: "left",
  },
  userplaceholder: {
    top: 15,
    zIndex: 3,
    left: 20,
    flexDirection: "row",
  },
  senhaplaceholder: {
    top: 95,
    zIndex: 4,
    left: 20,
    flexDirection: "row",
  },
  formlogin: {
    marginTop: -148,
    marginLeft: -160,
    top: "50%",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  textform: {
    marginLeft: -141,
    top: 213,
    fontSize: 30,
    fontFamily: FontFamily.normalFont,
    left: "50%",
    position: "absolute",
  },
  esqueceuSuaSenha: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    marginLeft: -76,
    fontFamily: FontFamily.normalFont,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  esqueceusenhatxtChild: {
    top: 16,
    height: 2,
  },
  esqueceusenhatxt: {
    top: 548,
    height: 21,
  },
  cadastrolinkChild: {
    top: 24,
    borderStyle: "solid",
    borderColor: Color.colorBrown,
    borderTopWidth: 1,
    height: 1,
  },
  novoPorAqui: {
    marginLeft: -143.5,
    color: Color.colorBrown,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 0,
  },
  cadastrolink: {
    top: 649,
    height: 30,
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
    marginLeft: -97,
    top: 70,
    left: "50%",
  },
  formloginParent: {
    marginLeft: -215,
    backgroundColor: Color.background,
    width: 430,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  login: {
    backgroundColor: "#e6e6fa",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default Login;
