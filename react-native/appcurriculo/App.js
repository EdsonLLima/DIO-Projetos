import React from "react";
import { ScrollView } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import photo from "./assets/edson-lima.jpg";

const App = () => {
  function handleSocialNetworks(social_networks) {
    switch (social_networks) {
      case "linkedin":
        Alert.alert("Meu LinkedIn", "https://www.linkedin.com/in/edsonllima/");
        break;
      case "github":
        Alert.alert("Meu GitHub", "https://github.com/EdsonLLima");
        break;
      case "facebook":
        Alert.alert(
          "Meu Facebook",
          "https://www.facebook.com/edson.lima.7545708"
        );
        break;
    }
  }

  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_cabecalho}>
            <Image source={photo} style={style.photo} />
            <Text style={style.name}>Edson Lima</Text>
            <Text style={style.job}>Mobile Developer</Text>
            <View style={style.social_networks}>
              <TouchableOpacity onPress={() => handleSocialNetworks("github")}>
                <Icon name="github" size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialNetworks("facebook")}
              >
                <Icon name="facebook" size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialNetworks("linkedin")}
              >
                <Icon name="linkedin" size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Experiencia Profissional</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>
                  Instrutor em Informática
                </Text>
                <Text style={style.card_content_text}>
                  Desenvolvedor Wordpress
                </Text>
                <Text style={style.card_content_text}>
                  Mega Empreendimentos FrontEnd
                </Text>
              </View>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Formação Academica</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>
                  Faculdade Estacio de Sá
                </Text>
                <Text style={style.card_content_text}>
                  Dio - Bootcamp Eduzz
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#e7e7e7",
    flex: 1,
  },
  container_cabecalho: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  job: {
    color: "#939393",
    marginBottom: 10,
  },
  social_networks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
  card_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "60%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#939393",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#ffffff",
  },
  card_header: {},
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: "#939393",
    marginBottom: 10,
  },
});

export default App;
