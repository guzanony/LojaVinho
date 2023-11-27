import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TelaDescrio = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.teladescrio, styles.iconLayout]}>
      <View style={styles.teladescrioChild} />
      <Text style={[styles.descrioDoProduto, styles.oVinhoSantaTypo]}>
        Descrição do Produto
      </Text>
      <View style={styles.descriptionWrapper}>
        <View style={styles.description}>
          <Text
            style={[styles.oVinhoSanta, styles.oVinhoSantaTypo]}
          >{`O vinho Santa Lucia é produzido no Chile pela Viña El Aromo na região do Maule Valley, O vinho tem uma coloração vermelho rubi, com traços a cassis, pimenta e especiarias.
Seu sabor é suave e especial para acompanhar carnes vermelhas, massas, feijoadas e queijos maduros.
`}</Text>
          <Image
            style={styles.santaLuciaCabernet2Icon}
            contentFit="cover"
            source={require("../assets/Santa-Lucia-Cabernet.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  oVinhoSantaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.normalFont,
    position: "absolute",
  },
  teladescrioChild: {
    top: 212,
    left: 29,
    width: 346,
    height: 443,
    position: "absolute",
    overflow: "hidden",
  },
  descrioDoProduto: {
    marginLeft: -135,
    top: 75,
    fontSize: FontSize.normalFont_size,
    left: "50%",
  },
  oVinhoSanta: {
    top: 4,
    left: 157,
    fontSize: FontSize.size_mini,
    width: 194,
    height: 378,
  },
  santaLuciaCabernet2Icon: {
    marginTop: -191,
    marginLeft: -175.5,
    top: "50%",
    width: 135,
    height: 350,
    left: "50%",
    position: "absolute",
  },
  description: {
    top: 109,
    left: 32,
    width: 351,
    height: 382,
    position: "absolute",
  },
  descriptionWrapper: {
    marginLeft: -200,
    top: 133,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGoldenrod,
    width: 400,
    height: 600,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back1: {
    left: 18,
    top: 20,
    width: 35,
    height: 35,
    position: "absolute",
  },
  teladescrio: {
    backgroundColor: Color.background,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default TelaDescrio;
