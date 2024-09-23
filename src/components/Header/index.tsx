import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isInitialRoute = route.name === "Cadastro";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.headerContainer}>
        {!isInitialRoute && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
        )}
        <Image
          source={require("../../assets/images/meeting.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Meeting</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
