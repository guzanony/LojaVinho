import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <View style={[styles.nombreusuario, styles.favoritosFlexBox]}>
        <Image
          style={styles.fotoperfilIcon}
          contentFit="cover"
          source={require("../assets/fotoperfil.png")}
        />
        <Text style={[styles.nomeDoUsuario, styles.meusDadosClr]}>
          Nome do usuario
        </Text>
      </View>
      <View style={[styles.infoprofile, styles.infoprofilePosition]}>
        <View style={[styles.dados, styles.dadosSpaceBlock]}>
          <Image
            style={styles.descriptionFill0Wght400GradIcon}
            contentFit="cover"
            source={require("../assets/descriptionIcon.png")}
          />
          <Text style={[styles.meusDados, styles.meusDadosClr]}>
            Meus Dados
          </Text>
        </View>
        <View style={[styles.favoritos, styles.dadosSpaceBlock]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.meusDados, styles.meusDadosClr]}>Favoritos</Text>
        </View>
        <View style={[styles.favoritos, styles.dadosSpaceBlock]}>
          <Image
            style={styles.descriptionFill0Wght400GradIcon}
            contentFit="cover"
            source={require("../assets/pagamentoicon.png")}
          />
          <Text style={[styles.meusDados, styles.meusDadosClr]}>
            Pagamentos
          </Text>
        </View>
      </View>
      <View style={[styles.menuvariant2, styles.dadosSpaceBlock]}>
        <View style={[styles.menuhome, styles.menuhomeLayout]}>
          <Image
            style={styles.homeSharpIcon}
            contentFit="cover"
            source={require("../assets/homesharp1.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
        <Pressable
          style={[styles.menuproducts, styles.menuhomeLayout]}
          onPress={() => navigation.navigate("TelaProdutos")}
        >
          <Image
            style={styles.homeSharpIcon}
            contentFit="cover"
            source={require("../assets/gridsharp1.png")}
          />
          <Text style={styles.home}>Items</Text>
        </Pressable>
        <View style={[styles.menuprofile, styles.menuhomeLayout]}>
          <Image
            style={styles.homeSharpIcon}
            contentFit="cover"
            source={require("../assets/person1.png")}
          />
          <Text style={styles.home}>Perfil</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritosFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  meusDadosClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.normalFont,
  },
  infoprofilePosition: {
    left: "50%",
    position: "absolute",
  },
  dadosSpaceBlock: {
    padding: Padding.p_8xs,
    flexDirection: "row",
  },
  menuhomeLayout: {
    height: 50,
    width: 100,
    borderRadius: Border.br_13xl,
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  fotoperfilIcon: {
    width: 80,
    height: 80,
  },
  nomeDoUsuario: {
    fontSize: FontSize.normalFont_size,
    marginLeft: 15,
    textAlign: "left",
  },
  nombreusuario: {
    marginLeft: -155,
    top: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  descriptionFill0Wght400GradIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  meusDados: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    marginLeft: 10,
  },
  dados: {
    alignItems: "flex-end",
  },
  vectorIcon: {
    width: 28,
    height: 28,
  },
  favoritos: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  infoprofile: {
    marginTop: -102,
    marginLeft: -100,
    top: "50%",
    padding: 10,
    justifyContent: "center",
  },
  homeSharpIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.branco,
    marginLeft: 4,
    textAlign: "left",
  },
  menuhome: {
    backgroundColor: Color.colorOrchid,
  },
  menuproducts: {
    backgroundColor: Color.colorDarkorchid,
    marginLeft: 15,
  },
  menuprofile: {
    backgroundColor: Color.colorBlueviolet_100,
    marginLeft: 15,
  },
  menuvariant2: {
    marginLeft: -190,
    top: 762,
    borderRadius: Border.br_51xl,
    backgroundColor: Color.colorGray,
    width: 380,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  perfil: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Perfil;
