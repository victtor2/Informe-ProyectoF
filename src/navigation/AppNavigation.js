import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/screenName";
import InformacionProStack from "./InformacionProStack";
import CarritoStack from "./CarritoStack";
import AccountStack from "./AccountStack";
import ListaProStack from "./ListaProStack";

//Crear una instancia para la gestion de la navegacion
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen 
                name= {screen.listaPro.tab} 
                component= {ListaProStack} 
                option={{ title: "Lista Productos" }} 
            />
            
            <Tab.Screen 
                name= {screen.carrito.tab} 
                component= {CarritoStack} 
                option={{ title: "Carrito" }} 
            />
            <Tab.Screen 
                name= {screen.informacionPro.tab} 
                component= {InformacionProStack} 
                option={{ title: "Informacion Productos" }} 
            />
            <Tab.Screen vw
                name= {screen.account.tab} 
                component= {AccountStack} 
                option={{ title: "Cuenta" }} 
            />
        </Tab.Navigator>
    );
};

const screenOptions = (route, color, size) => {
    let iconName;

    if (route.name == screen.account.tab) {
        iconName = "home-outline";
    }
    if (route.name == screen.informacionPro.tab) {
        iconName = "information-outline";        
    }
    if (route.name == screen.listaPro.tab) {
        iconName = "view-list";
    }
    if (route.name == screen.carrito.tab) {
        iconName = "cart-outline";
    }

    return(
        <Icon type="material-community" name={iconName} color={color} size={size} />
    );
};