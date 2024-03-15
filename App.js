import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import styles from './estilo/style.js';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            style={styles.menuIcon}
            source={require("./assets/menu-icon.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.headerlogo}
          source={require("./assets/logo.png")}
        />
        <Image
          style={styles.carrinho}
          source={require("./assets/carrinho.png")}
        />
      </View>
      <View style={styles.headerbar}>
        <TextInput
          style={styles.input}
          placeholder="Digite o que você procura"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.h1}>Gelos</Text>
      <View style={styles.menucard}>
        <View style={styles.containerProduct}>
          <Image
            style={{ height: 140, width: 110 }}
            source={require("./assets/saco-de-gelo.png")}
          />
          <Text>Saco de gelo</Text>
          <Text style={styles.price}>R$ 10,00</Text>
          <Button
            style={styles.button}
            title="Comprar"
            onPress={() => Alert.alert('Produto adicionado ao carrinho')}
          />
        </View>
        <View style={styles.containerProduct}>
          <Image
            style={{ height: 140, width: 110 }}
            source={require("./assets/gelorigido.jpg")}
          />
          <Text>Gelo gel artificial</Text>
          <Text style={styles.price}>R$ 10,00</Text>
          <Button
            style={styles.button}
            title="Comprar"
            onPress={() => Alert.alert('Produto adicionado ao carrinho')}
          />
        </View>
      </View>
      <View style={styles.menucard}>
        <View style={styles.containerProduct}>
          <Image
            style={{ height: 140, width: 110 }}
            source={require("./assets/geloartificial.webp")}
          />
          <Text>Gelo Artificial</Text>
          <Text style={styles.price}>R$ 10,00</Text>
          <Button
            style={styles.button}
            title="Comprar"
            onPress={() => Alert.alert('Produto adicionado ao carrinho')}
          />
        </View>
        <View style={styles.containerProduct}>
          <Image
            style={{ height: 140, width: 110 }}
            source={require("./assets/kitgelo.webp")}
          />
          <Text>Kit gelo/50 uni</Text>
          <Text style={styles.price}>R$ 10,00</Text>
          <Button
            style={styles.button}
            title="Comprar"
            onPress={() => Alert.alert('Produto adicionado ao carrinho')}
          />
        </View>
      </View>

      {
        showMenu && (
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Minha conta</Text>
            <Text style={styles.menuItem}>Meus pedidos</Text>
            <Text style={styles.menuItem}>Gelos</Text>
            <Text style={styles.menuItemFinal}>Contato</Text>
          </View>

        )
      }
    </View >
  );
}


