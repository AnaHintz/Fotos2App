import { Text, View, Image } from "react-native";
import { Button } from "react-native";

export default function HomeScreen({ navigation }){
    return(
<View>
<Text>Bem-Vindo ao Fotos!📸
    Aqui você pode conferir os seus momentos mais especiais✨ </Text>
    <Button 
    title="Galeria" 
    onPress={()=> navigation.navigate("GaleriaScreen")}/>
    


</View>

    )
}