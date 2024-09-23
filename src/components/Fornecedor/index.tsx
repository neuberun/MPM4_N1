import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";

export type FornecedorType = {
  nome: string;
  endereco: string;
  contato: string;
  categorias: string;
  imagemURL?: string;
};

type Props = FornecedorType & {
  onRemove: () => void;
  onEdit: () => void;
};

export function Fornecedor({
  nome,
  endereco,
  contato,
  categorias,
  imagemURL,
  onRemove,
  onEdit,
}: Props) {
  return (
    <View style={styles.item}>
      {imagemURL && <Image source={{ uri: imagemURL }} style={styles.image} />}
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Endereço: {endereco}</Text>
      <Text style={styles.text}>Contato: {contato}</Text>
      <Text style={styles.text}>Categorias: {categorias}</Text>
      <TouchableOpacity onPress={onEdit}>
        <Text style={styles.redText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.redText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}
