
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useContext, useState } from 'react';

export type Produto = {
  id: string;
  nome: string;
  marca: string;
  categoria: string;
  preco: number;
};

type ProdutoContextType = {
  produtos: Produto[];
  adicionarProduto: (produto: Produto) => void;
};

const ProdutoContext = createContext<ProdutoContextType | null>(null);

export function useProdutos() {
  const contexto = useContext(ProdutoContext);

  if (!contexto) {
    throw new Error('ProdutoContext não encontrado');
  }

  return contexto;
}

export default function RootLayout() {
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: '1',
      nome: 'Memória RAM 8GB DDR4',
      marca: 'Kingston',
      categoria: 'Memória RAM',
      preco: 150,
    },
    {
      id: '2',
      nome: 'SSD 480GB',
      marca: 'Kingston',
      categoria: 'Armazenamento',
      preco: 220,
    },
    {
      id: '3',
      nome: 'Ryzen 5',
      marca: 'AMD',
      categoria: 'Processador',
      preco: 650,
    },
  ]);

  function adicionarProduto(produto: Produto) {
    setProdutos((atuais) => [...atuais, produto]);
  }

  return (
    <ProdutoContext.Provider value={{ produtos, adicionarProduto }}>
      <StatusBar style="light" backgroundColor="#000000" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#101010' },
        }}
      />
    </ProdutoContext.Provider>
  );
}
