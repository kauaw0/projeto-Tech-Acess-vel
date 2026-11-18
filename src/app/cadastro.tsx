
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { Produto, useProdutos } from './_layout';

export default function CadastroScreen() {
  const { adicionarProduto } = useProdutos();

  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');

  function cadastrar() {
    if (
      !nome.trim() ||
      !marca.trim() ||
      !categoria.trim() ||
      !preco.trim()
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    const valor = Number(preco.replace(',', '.'));

    if (!Number.isFinite(valor) || valor <= 0) {
      Alert.alert('Atenção', 'Digite um preço válido!');
      return;
    }

    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome: nome.trim(),
      marca: marca.trim(),
      categoria: categoria.trim(),
      preco: valor,
    };

    adicionarProduto(novoProduto);

    setNome('');
    setMarca('');
    setCategoria('');
    setPreco('');

    Alert.alert('Sucesso', 'Produto cadastrado!');

    router.replace('/');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.logo}>
        Tech<Text style={styles.green}>Acessível</Text>
      </Text>

      <Text style={styles.titulo}>Cadastrar equipamento</Text>

      <Text style={styles.descricao}>
        Adicione uma nova peça ao catálogo.
      </Text>

      <Text style={styles.label}>Nome do equipamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Memória RAM 16GB"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Marca</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Kingston"
        placeholderTextColor="#888"
        value={marca}
        onChangeText={setMarca}
      />

      <Text style={styles.label}>Categoria</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Memória RAM"
        placeholderTextColor="#888"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Text style={styles.label}>Preço (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 250,00"
        placeholderTextColor="#888"
        keyboardType="decimal-pad"
        value={preco}
        onChangeText={setPreco}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.botaoTexto}>
          Cadastrar produto
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => router.back()}
      >
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  conteudo: {
    padding: 25,
    paddingTop: 45,
    paddingBottom: 40,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  green: {
    color: '#006be6',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#AAAAAA',
    marginTop: 10,
    marginBottom: 25,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#383838',
  },
  botao: {
    backgroundColor: '#006be6',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#101010',
    fontWeight: 'bold',
    fontSize: 16,
  },
  voltar: {
    padding: 18,
    alignItems: 'center',
  },
  voltarTexto: {
    color: '#006be6',
    fontSize: 15,
  },
});
