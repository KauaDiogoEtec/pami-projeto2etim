import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a856e3',
        padding: 8,
        alignItems: 'center',
    },
    texto: {
        fontSize: RFValue(20),
        fontFamily: 'Consolas',
        width: 'auto',
    },
    titulo: {
        color: '#671e6b',
        fontWeight: 'bold',
    },
    subtitulo: {
        color: '#fff',
    },
});

export default styles;