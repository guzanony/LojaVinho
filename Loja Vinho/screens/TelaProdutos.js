import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const TelaProdutos = () => {
  const navigation = useNavigation();

  return (
  <View style={styles.telaprodutos}>

    {/* Seção do Cabeçalho */}
    <View style={[styles.headercontainer, styles.title]}>
      <View style={styles.headercontainerChild} />
      <View style={[styles.header, styles.headerFlexBox]}>
        <Text style={[styles.nossosVinhos, styles.r4300Typo]}>
          Nossos Vinhos
        </Text>
        <Image
          style={[styles.carrinhodecompras1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/carrinhodecompras-1.png")}
        />
      </View>
    </View>

    {/* Seção da Barra de Busca */}
    <View style={styles.barrabusca}>
      <View style={[styles.buscadorelements, styles.headerFlexBox]}>
        <Text style={[styles.encontreSeuVinho, styles.r4300Typo]}>
          Encontre seu vinho favorito
        </Text>
        <Image
          style={[styles.search1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
      </View>
    </View>

    {/* Seção do Catálogo */}
    <View style={[styles.catalogocontainer, styles.catalogocontainerPosition]}>
      {/* Produto 1 */}
      <View style={[styles.containerproduto, styles.containerprodutoLayout]}>
        <Image
          style={[
            styles.santaLuciaCabernet1Icon,
            styles.catalogocontainerPosition,
          ]}
          contentFit="cover"
          source={require("../assets/Santa-Lucia-Cabernet.png")}
        />
        <View style={[styles.productinfo, styles.productinfoPosition1]}>
          <Text style={[styles.vinhoSantaLucia, styles.vinhoPosition]}>
            Vinho Santa Lucia
          </Text>
          <Text style={[styles.r4300, styles.r4300Typo]}>R$43,00</Text>
        </View>
        <View style={[styles.buttonadd, styles.buttonaddLayout]}>
          <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
        </View>
        <Pressable
          style={[styles.buttoninfo, styles.buttonaddLayout]}
          onPress={() => navigation.navigate("TelaDescrio")}
        >
          <Text style={[styles.info, styles.infoTypo]}>Info</Text>
        </Pressable>
      </View>

      {/* Produto 2 */}
      <View style={[styles.containerproduto1, styles.containerprodutoLayout]}>
        <View style={styles.productinfo1}>
          <Text
            style={[styles.vinhoSantaLucia, styles.vinhoPosition]}
          >{`Vinho Piattelli 
          Torrontes`}</Text>
          <Text style={[styles.r7800, styles.r4300Typo]}>R$78,00</Text>
        </View>
        <View style={[styles.buttonadd, styles.buttonaddLayout]}>
          <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
        </View>
        <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
          <Text style={[styles.info, styles.infoTypo]}>Info</Text>
        </View>
        <Image
          style={[styles.vinhoPiattelliTorrontes1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/VINHO-PIATTELLI-TORRONTES.png")}
        />
      </View>

      {/* Produto 3 */}  
        <View style={[styles.containerproduto2, styles.containerprodutoLayout]}>
          <View style={styles.productinfo2}>
            <Text
              style={[styles.vinhoCodiciMasserie, styles.vinhoPosition]}
            >{`Vinho Codici Masserie 
Primitivo di Manduria`}</Text>
            <Text style={[styles.r7300, styles.r4300Typo]}>R$73,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.codiciPrimitivoDiManduria1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/CODICI-PRIMITIVO-DI-MANDURIA.png")}
          />
        </View>

      {/* Produto 4 */}
        <View style={[styles.containerproduto3, styles.containerprodutoLayout]}>
          <View style={[styles.productinfo3, styles.productinfoPosition1]}>
            <Text style={[styles.vinhoSantaLucia, styles.vinhoPosition]}>
              Vinho Corbelli
            </Text>
            <Text style={[styles.r4300, styles.r4300Typo]}>R$48,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.codiciPrimitivoDiManduria1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Corbelli-Montepulciano-DAbruzzo.png")}
          />
        </View>

      {/* Produto 5 */}
        <View style={[styles.containerproduto4, styles.containerprodutoLayout]}>
          <View style={[styles.productinfo4, styles.productinfoPosition]}>
            <Text
              style={[styles.vinhoSantaLucia, styles.vinhoPosition]}
            >{`Vinho Santa 
Helena`}</Text>
            <Text style={[styles.r3600, styles.r4300Typo]}>R$36,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.codiciPrimitivoDiManduria1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/SantaHelena.png")}
          />
        </View>

      {/* Produto 6 */}
        <View style={[styles.containerproduto5, styles.containerprodutoLayout]}>
          <View style={[styles.productinfo5, styles.productinfoPosition]}>
            <Text
              style={[styles.vinhoSantaLucia, styles.vinhoPosition]}
            >{`Vinho do Porto 
Taylor’s Fine Ruby`}</Text>
            <Text style={[styles.r3600, styles.r4300Typo]}>R$115,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.taylorSFineRuby1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Taylor_s-Fine-Ruby.png")}
          />
        </View>

      {/* Produto 7 */}
        <View style={[styles.containerproduto6, styles.containerprodutoLayout]}>
          <View style={[styles.productinfo6, styles.productinfoPosition]}>
            <Text
              style={[styles.vinhoSantaLucia, styles.vinhoPosition]}
            >{`Vinho Luigi Bosca 
Cabernet`}</Text>
            <Text style={[styles.r3600, styles.r4300Typo]}>R$85,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.codiciPrimitivoDiManduria1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Luigi-Bosca-Cabernet-Sauvignon.png")}
          />
        </View>

      {/* Produto 8 */}
        <View style={[styles.containerproduto7, styles.containerprodutoLayout]}>
          <View style={[styles.productinfo7, styles.productinfoPosition]}>
            <Text
              style={[styles.vinhoSantaLucia, styles.vinhoPosition]}
            >{`Vinho Don Pascual 
Reserva Tannat`}</Text>
            <Text style={[styles.r3600, styles.r4300Typo]}>R$43,00</Text>
          </View>
          <View style={[styles.buttonadd, styles.buttonaddLayout]}>
            <Text style={[styles.comprar, styles.infoTypo]}>Comprar</Text>
          </View>
          <View style={[styles.buttoninfo, styles.buttonaddLayout]}>
            <Text style={[styles.info, styles.infoTypo]}>Info</Text>
          </View>
          <Image
            style={[styles.donPascualTannat1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Don-Pascual-Tannat.png")}
          />
        </View>

      </View>
      
      {/* Seção do Menu Inferior */}
    <View style={styles.menuvariant2}>
      <View style={styles.menuhome}>
        <Image
          style={styles.homeSharpIcon}
          contentFit="cover"
          source={require("../assets/homesharp1.png")}
        />
        <Text style={[styles.home, styles.infoTypo]}>Home</Text>
      </View>
      <Pressable
        style={[styles.menuproducts, styles.menuprofileLayout]}
        onPress={() => navigation.navigate("TelaProdutos")}
      >
        <Image
          style={styles.homeSharpIcon}
          contentFit="cover"
          source={require("../assets/gridsharp1.png")}
        />
        <Text style={[styles.home, styles.infoTypo]}>Items</Text>
      </Pressable>
      <Pressable
        style={[styles.menuprofile, styles.menuprofileLayout]}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={styles.homeSharpIcon}
          contentFit="cover"
          source={require("../assets/person2.png")}
        />
        <Text style={[styles.home, styles.infoTypo]}>Perfil</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    
  },
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  r4300Typo: {
    textAlign: "center",
    fontFamily: FontFamily.normalFont,
  },
  iconLayout1: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
   catalogocontainer: {
    marginTop: 10,
    marginBottom: 20, // Adicionado um espaçamento inferior para melhorar a aparência
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  containerproduto: {
    width: "48%", // Utilizando 48% para permitir uma margem entre os elementos
    marginBottom: 16,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    overflow: "hidden",
  },
  productinfo: {
    padding: 10,
  },
  containerprodutoLayout: {
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
    height: 200,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  productinfoPosition1: {
    height: 63,
    left: 146,
    top: 20,
    position: "absolute",
  },
  vinhoPosition: {
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.normalFont,
    left: 0,
    position: "absolute",
  },
  buttonaddLayout: {
    height: 35,
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_3xs,
    top: 135,
    position: "absolute",
    overflow: "hidden",
  },
  infoTypo: {
    color: Color.branco,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconLayout: {
    width: 80,
    position: "absolute",
  },
  productinfoPosition: {
    height: 88,
    left: 146,
    top: 20,
    position: "absolute",
  },
  menuprofileLayout: {
    marginLeft: 15,
    borderRadius: Border.br_13xl,
    padding: Padding.p_8xs,
    justifyContent: "center",
    width: 100,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  headercontainerChild: {
    width: 430,
    zIndex: 0,
    height: 50,
    backgroundColor: Color.background,
  },
  nossosVinhos: {
    fontSize: FontSize.normalFont_size,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
  },
  carrinhodecompras1Icon: {
    marginLeft: 170,
  },
  header: {
    top: 6,
    zIndex: 1,
    left: "50%",
    marginLeft: -190,
    alignItems: "center",
    flexDirection: "row",
  },
  headercontainer: {
    top: 25,
  },
  encontreSeuVinho: {
    color: Color.placeholder,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
  },
  search1Icon: {
    marginLeft: 115,
  },
  buscadorelements: {
    left: 21,
    top: 10,
  },
  barrabusca: {
    marginLeft: -191,
    top: 96,
    borderRadius: Border.br_mini,
    backgroundColor: Color.branco,
    width: 382,
    left: "50%",
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  santaLuciaCabernet1Icon: {
    marginTop: -90,
    marginLeft: -150,
    width: 102,
    height: 180,
  },
  vinhoSantaLucia: {
    fontSize: FontSize.size_xl,
  },
  r4300: {
    top: 40,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: 0,
    position: "absolute",
  },
  productinfo: {
    width: 179,
  },
  comprar: {
    marginLeft: -32,
    fontSize: FontSize.size_sm,
    marginTop: -9.5,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonadd: {
    left: 225,
    width: 100,
    height: 35,
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_3xs,
    top: 135,
  },
  info: {
    marginLeft: -13,
    fontSize: FontSize.size_sm,
    marginTop: -9.5,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttoninfo: {
    width: 60,
    height: 35,
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_3xs,
    top: 135,
    left: 146,
  },
  containerproduto: {
    height: 200,
    top: 20,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  r7800: {
    top: 68,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: 0,
    position: "absolute",
  },
  productinfo1: {
    width: 140,
    height: 91,
    left: 146,
    top: 20,
    position: "absolute",
  },
  vinhoPiattelliTorrontes1Icon: {
    top: 9,
    left: 33,
    height: 182,
  },
  containerproduto1: {
    top: 245,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  vinhoCodiciMasserie: {
    fontSize: FontSize.size_mini,
  },
  r7300: {
    top: 57,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: 0,
    position: "absolute",
  },
  productinfo2: {
    width: 170,
    height: 80,
    left: 146,
    top: 20,
    position: "absolute",
  },
  codiciPrimitivoDiManduria1Icon: {
    left: 25,
    height: 180,
    top: 10,
  },
  containerproduto2: {
    top: 470,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  productinfo3: {
    width: 139,
  },
  containerproduto3: {
    top: 695,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  r3600: {
    top: 65,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normalFont,
    left: 0,
    position: "absolute",
  },
  productinfo4: {
    width: 127,
  },
  containerproduto4: {
    top: 920,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  productinfo5: {
    width: 177,
  },
  taylorSFineRuby1Icon: {
    top: 2,
    left: 28,
    height: 200,
  },
  containerproduto5: {
    top: 1145,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  productinfo6: {
    width: 179,
  },
  containerproduto6: {
    top: 1370,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  productinfo7: {
    width: 192,
  },
  donPascualTannat1Icon: {
    left: 35,
    height: 180,
    top: 10,
  },
  containerproduto7: {
    top: 1595,
    height: 200,
    width: 350,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_6xl,
    marginLeft: -175,
  },
  catalogocontainer: {
    marginTop: -300,
    marginLeft: -200,
    width: 400,
    height: 570,
  },
  homeSharpIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  home: {
    marginLeft: 4,
    fontSize: FontSize.size_mini,
  },
  menuhome: {
    backgroundColor: Color.colorOrchid,
    borderRadius: Border.br_13xl,
    padding: Padding.p_8xs,
    justifyContent: "center",
    width: 100,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  menuproducts: {
    backgroundColor: Color.colorDarkorchid,
  },
  menuprofile: {
    backgroundColor: Color.colorBlueviolet_100,
  },
  menuvariant2: {
    top: 762,
    borderRadius: Border.br_51xl,
    backgroundColor: Color.colorGray,
    width: 380,
    padding: Padding.p_8xs,
    justifyContent: "center",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    marginLeft: -190,
    position: "absolute",
  },
  telaprodutos: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.background,
  },
});

export default TelaProdutos;
