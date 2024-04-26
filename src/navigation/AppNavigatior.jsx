import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GaleriaScreen from "./screens/GaleriaScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:"Inicial"
                }}
                
                />
          <Stack.Screen 
          name="GaleriaScreen"
          component={GaleriaScreen}
          options={{
            title:"Sua Galeria" 
          }}
          >
          </Stack.Screen>

              
            </Stack.Navigator>
        </NavigationContainer>
    );
    
            }