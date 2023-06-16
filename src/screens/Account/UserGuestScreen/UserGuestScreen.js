import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView
      //Para centrar en la screen en android
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Los mejores equipos GAMER.</Text>
      <Text style={styles.description}>
        Si te Gusta jugar suscribete y encontraras las mejores ofertas para obtener 
        tus equipos y herramientas GAMER!, que podras encontrar en el Pais.
      </Text>
      <Button
        title="Suscribete!"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;