import { Text, View, Image } from "react-native";

    export default function GaleriaScreen({ navigation }){
        return(
            <View>
                <Text>
                    Compartilhe seus momentos💖
                </Text>
<Image
source={require('../../../assets/zap.jpg')}
/>
            </View>
        )
    }