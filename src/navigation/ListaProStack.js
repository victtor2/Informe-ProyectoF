import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen} from "../utils/screenName";
import ListaProScreen from "../screens/Productos/ListaProScreen";
import AddProductScreen from "../screens/Productos/AddProductScreen";

//Intermediarion o instancia del componente que permita trabajar el stack navigation
const Stack=createNativeStackNavigator();

const ListaProStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.listaPro.listaPro} 
                component={ListaProScreen} 
                options={{title:"Lista Productos"}} 
            />
             <Stack.Screen 
                name={screen.listaPro.addProduct} 
                component={AddProductScreen} 
                options={{title:"Nuevo Producto"}} 
            />
            
        </Stack.Navigator>
    );
};

export default ListaProStack;
