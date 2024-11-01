import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 8,
    },
    titulo: {
        fontSize: RFValue(20),
        color: '#fafafa',
        marginTop: 16,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: RFValue(20),
        color: '#069',
        marginTop: 16,
        fontWeight: 'bold',
    },
});

export default styles;