
import { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useProdutos, Produto } from './_layout';

export default function ProdutosScreen() {
  const { produtos } = useProdutos();
  const [busca, setBusca] = useState('');

  const produtosFiltrados = produtos.filter((produto) =>
    `${produto.nome} ${produto.marca} ${produto.categoria}`
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  function formatarPreco(preco: number) {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function ProdutoCard({ item }: { item: Produto }) {
    return (
      <View style={styles.card}>
        <View style={styles.icone}>
          <Text style={styles.iconeTexto}>💻</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.detalhe}>
            {item.marca} • {item.categoria}
          </Text>

          <Text style={styles.preco}>
            {formatarPreco(item.preco)}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Tech<Text style={styles.green}>Acessível</Text>
      </Text>

      <Text style={styles.titulo}>Equipamentos</Text>

      <Text style={styles.descricao}>
        Encontre as peças que você procura.
      </Text>

      <TextInput
        style={styles.busca}
        placeholder="Buscar produto, marca ou categoria..."
        placeholderTextColor="#888"
        value={busca}
        onChangeText={setBusca}
      />

      <Text style={styles.quantidade}>
        {produtosFiltrados.length} produto(s) encontrado(s)
      </Text>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoCard item={item} />}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto encontrado.
          </Text>
        }
        contentContainerStyle={styles.lista}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.botaoTexto}>
          + Cadastrar equipamento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.voltarTexto}>
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
    padding: 22,
    paddingTop: 45,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  green: {
    color: '#006be6',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#AAAAAA',
    marginTop: 8,
    marginBottom: 20,
  },
  busca: {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  quantidade: {
    color: '#AAAAAA',
    marginBottom: 15,
  },
  lista: {
    paddingBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#202020',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  icone: {
    width: 55,
    height: 55,
    backgroundColor: '#006be6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  iconeTexto: {
    fontSize: 25,
  },
  info: {
    flex: 1,
  },
  nome: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detalhe: {
    color: '#AAAAAA',
    marginTop: 5,
    fontSize: 12,
  },
  preco: {
    color: '#006be6',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8,
  },
  vazio: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 30,
  },
  botao: {
    backgroundColor: '#006be6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#101010',
    fontWeight: 'bold',
  },
  voltar: {
    alignItems: 'center',
    padding: 15,
  },
  voltarTexto: {
    color: '#006be6',
  },
});
