
import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useProdutos } from './_layout';

export default function HomeScreen() {
  const { produtos } = useProdutos();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Tech<Text style={styles.green}>Acessível</Text>
      </Text>

      <Text style={styles.subtitulo}>
        Tecnologia ao seu alcance
      </Text>

      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>
          Encontre peças pelo melhor preço!
        </Text>

        <Text style={styles.bannerTexto}>
          Pesquise, cadastre e encontre equipamentos de informática.
        </Text>
      </View>

      <Text style={styles.titulo}>O que deseja fazer?</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.botaoTexto}>
          + Cadastrar equipamento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => router.push('/produto')}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Pesquisar produtos
        </Text>
      </TouchableOpacity>

      <View style={styles.resumo}>
        <Text style={styles.numero}>{produtos.length}</Text>
        <Text style={styles.resumoTexto}>
          Produtos disponíveis no catálogo
        </Text>
      </View>

      <Text style={styles.rodape}>
        Tech Acessível © 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 25,
    justifyContent: 'center',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  green: {
    color: '#006be6',
  },
  subtitulo: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
  },
  banner: {
    backgroundColor: '#006be6',
    padding: 25,
    borderRadius: 15,
    marginBottom: 35,
  },
  bannerTitulo: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bannerTexto: {
    color: '#D5F5E3',
    fontSize: 15,
    lineHeight: 22,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#006be6',
    padding: 17,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#101010',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    borderWidth: 1,
    borderColor: '#006be6',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoSecundarioTexto: {
    color: '#006be6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resumo: {
    backgroundColor: '#202020',
    padding: 18,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },
  numero: {
    color: '#006be6',
    fontSize: 28,
    fontWeight: 'bold',
  },
  resumoTexto: {
    color: '#AAAAAA',
    marginTop: 5,
  },
  rodape: {
    color: '#777777',
    textAlign: 'center',
    marginTop: 35,
  },
});
