import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import AccountScreen from "../screens/Account/AccountScreen";
import LoginScreen from "../screens/Account/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Account/RegisterScreen/RegisterScreen";

//Intermediarion o instancia del componente que permita trabajar el stack navigation
const Stack=createNativeStackNavigator();

const AccountStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.account.account} 
                component={AccountScreen} 
                options={{title:"Cuenta Productos"}} 
            />
            <Stack.Screen 
                name={screen.account.login} 
                component={LoginScreen} 
                options={{ title: "Inicia Sesion" }} 
            />
            <Stack.Screen 
                name={screen.account.register} 
                component={RegisterScreen} 
                options={{ title: "Registrarse" }} 
            />
        </Stack.Navigator>
    );
};

export default AccountStack;
