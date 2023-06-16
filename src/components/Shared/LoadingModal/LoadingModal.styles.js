//hoja de estilos 
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
      height: 100,
      width: 100,
      backgroundColor: "#ffffff",
      borderColor: "#00a680",
      borderWidth: 2,
      borderRadius: 15,
    },
    view: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color:"#00a680",
      textTransform: "uppercase",   // todo con mayuscula
      marginTop: 10,                //4 propiedades para centrar 
    },
  });
  