import { View, Text } from "react-native-web";

import styles from "./styles";

export default function Atividade1()
{
    return (
        <View style={styles.container}> 
            <Text style={styles.titulo}>
                Bom dia
            </Text>
            <Text style={styles.texto}>
                Calabreso
            </Text>
        </View>
    )
}