import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import ListaProScreen from "./Productos/ListaProScreen";

const CarritoScreen = () => {
  
  //useState
  const [count, setCount] = useState(0);

  //incremente de pedidos
  const sumaCount = () => {
      setCount(count + 1);
    };

  //resta de pedidos
  const restaCount = () => {
      setCount(count - 1);
    };

  return (
    <View>
      <Text>Cantidad de Productos: {count}</Text>
      <Button title="Incrementa" onPress={sumaCount} />
      <Button title="Decrementa" onPress={restaCount} />
    </View>
  );
};

export default CarritoScreen;