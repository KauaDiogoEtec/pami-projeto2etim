import { View, Text } from 'react-native';

import styles from './styles';

export default function Mensagem(props) {
    return (
        <View>
            <Text style={styles.texto}>
                Olá {props.nome}
            </Text>
            <Text style={styles.texto}>
                Idade: {props.idade}
            </Text>
        </View>
    );
}

