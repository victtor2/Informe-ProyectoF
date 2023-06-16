import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import CarritoScreen from "../screens/CarritoScreen";

//Instancia del componente
const Stack = createNativeStackNavigator();

const CarritoStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.carrito.carrito} 
                component={CarritoScreen} 
                options={{title: "Carrito" }} 
            />
        </Stack.Navigator>
    );
};

export default CarritoStack;