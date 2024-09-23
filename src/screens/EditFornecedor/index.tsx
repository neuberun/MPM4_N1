import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditFornecedor = ({ route, navigation }) => {
  const { fornecedor } = route.params;

  const [nome, setNome] = useState(fornecedor.nome);
  const [endereco, setEndereco] = useState(fornecedor.endereco);
  const [contato, setContato] = useState(fornecedor.contato);
  const [categorias, setCategorias] = useState(fornecedor.categorias);
  const [imagemURL, setImagemURL] = useState(fornecedor.imagemURL || "");

  const handleSave = async () => {
    try {
      const fornecedoresData = await AsyncStorage.getItem("fornecedores");
      if (fornecedoresData) {
        const fornecedoresList = JSON.parse(fornecedoresData);
        const updatedFornecedores = fornecedoresList.map((f) =>
          f.nome === fornecedor.nome
            ? { ...f, nome, endereco, contato, categorias, imagemURL }
            : f
        );
        await AsyncStorage.setItem(
          "fornecedores",
          JSON.stringify(updatedFornecedores)
        );
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao atualizar fornecedor:", error);
      Alert.alert("Erro", "Não foi possível atualizar o fornecedor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Fornecedor</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Endereço"
      />
      <TextInput
        style={styles.input}
        value={contato}
        onChangeText={setContato}
        placeholder="Contato"
      />
      <TextInput
        style={styles.input}
        value={categorias}
        onChangeText={setCategorias}
        placeholder="Categorias"
      />
      <TextInput
        style={styles.input}
        value={imagemURL}
        onChangeText={setImagemURL}
        placeholder="URL da Imagem (opcional)"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSave}>
        <Text style={styles.addButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditFornecedor;
