import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen} from "../utils/screenName";
import InformacionProScreen from "../screens/InformacionProScreen";


//Intermediarion o instancia del componente que permita trabajar el stack navigation
const Stack = createNativeStackNavigator();

const InformacionProStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.informacionPro.informacionPro} 
                component={InformacionProScreen} 
                options={{title:"Informacion Productos"}} 
            />
        </Stack.Navigator>
    );
};

export default InformacionProStack;