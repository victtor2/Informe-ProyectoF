import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "@rneui/themed";

const ListaProScreen = () => {
  const products = [
    {
        id: '01',
        name:'laptop',
        price: 1500,
        detail: 'gamer'
    },
    {
        id: '02',
        name:'teclado',
        price: 80,
        detail: 'gamer'
    },
    {
        id: '03',
        name: 'monitor',
        price: 120,
        detail: 'gamer'
    },
    
];

  //const [pq,p2,p3,p4] = products;

  return (
    <View>
      {products.map((product) => {
        return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{product.name}</ListItem.Title>
          <ListItem.Subtitle>{product.price}</ListItem.Subtitle>
          
        </ListItem.Content>
      </ListItem>
        );
      })}
    </View>
  );
};

export default ListaProScreen;