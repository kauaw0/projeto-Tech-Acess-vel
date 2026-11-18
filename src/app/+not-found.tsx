
import { router } from 'expo-router';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.codigo}>404</Text>

      <Text style={styles.titulo}>
        Página não encontrada
      </Text>

      <Text style={styles.descricao}>
        Não conseguimos encontrar essa página.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.botaoTexto}>
          Voltar ao início
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  codigo: {
    color: '#006be6',
    fontSize: 65,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  descricao: {
    color: '#AAAAAA',
    marginTop: 10,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#006be6',
    padding: 16,
    borderRadius: 10,
    marginTop: 25,
  },
  botaoTexto: {
    color: '#101010',
    fontWeight: 'bold',
  },
});
