import { View, Text } from "react-native-web";

import styles from "./styles";

export default function Exemplo1()
{
    return <View style={styles.container}> 
        <Text style={[styles.texto, styles.titulo]}>
            Bom dia
        </Text>
        <Text style={[styles.texto, styles.subtitulo]}>
            Aula 1
        </Text>
    </View>
}