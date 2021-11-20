import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Card from "./src/components/Card";
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

          <Card title="Formação Academica">
            <Text style={style.card_content_text}>Faculdade Estacio de Sá</Text>
            <Text style={style.card_content_text}>Dio - Bootcamp Eduzz</Text>
          </Card>
          <Card title="Experiências Profissionais">
            <Text style={style.card_content_text}>Mega</Text>
            <Text style={style.card_content_text}>Futura TI</Text>
          </Card>
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
  card_content_text: {
    color: "#939393",
    marginBottom: 10,
  },
});

export default App;
