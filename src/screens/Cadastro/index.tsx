import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import { FornecedorType } from "../../components/Fornecedor";

const Cadastro = ({ navigation, route }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categorias, setCategorias] = useState("");
  const [imagemURL, setImagemURL] = useState("");

  const handleAddFornecedor = async () => {
    if (!nome || !endereco || !contato || !categorias) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const fornecedoresData = await AsyncStorage.getItem("fornecedores");
      const fornecedores = fornecedoresData ? JSON.parse(fornecedoresData) : [];

      const fornecedorAlreadyExists = fornecedores.find(
        (fornecedor) => fornecedor.nome === nome
      );
      if (fornecedorAlreadyExists) {
        Alert.alert("Erro", "Já existe um fornecedor com este nome.");
        return;
      }

      const newFornecedor: FornecedorType = {
        nome,
        endereco,
        contato,
        categorias,
        imagemURL,
      };

      const updatedFornecedores = [...fornecedores, newFornecedor];
      await AsyncStorage.setItem(
        "fornecedores",
        JSON.stringify(updatedFornecedores)
      );

      Alert.alert("Sucesso", "Fornecedor adicionado!");

      navigation.navigate("Lista");

      setNome("");
      setEndereco("");
      setContato("");
      setCategorias("");
      setImagemURL("");
    } catch (error) {
      console.error("Falha ao salvar fornecedor:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Fornecedor"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Contato"
          value={contato}
          onChangeText={setContato}
        />
        <TextInput
          style={styles.input}
          placeholder="Categorias"
          value={categorias}
          onChangeText={setCategorias}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem (opcional)"
          value={imagemURL}
          onChangeText={setImagemURL}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddFornecedor}
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewListButton}
          onPress={() => navigation.navigate("Lista")}
        >
          <Text style={styles.viewListButtonText}>Lista de Fornecedores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
