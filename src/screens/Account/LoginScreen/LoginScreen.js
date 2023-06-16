//rnf+TAB
import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
