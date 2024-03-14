import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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
      {showMenu && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Minha conta</Text>
          <Text style={styles.menuItem}>Meus pedidos</Text>
          <Text style={styles.menuItem}>Gelos</Text>
          <Text style={styles.menuItemFinal}>Contato</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#72C9F5',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    top: 0
  },
  menuIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  headerlogo: {
    width: 160,
    height: 40,
    tintColor: 'white',
  },
  carrinho: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  menu: {
    position: 'absolute',
    top: 60,
    backgroundColor: '#72C9F5',
    width: '100%',
    padding: 10,
  },
  menuItem: {
    color: 'white',
    fontSize: 17,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemFinal: {
    color: 'white',
    fontSize: 17,
  },
});
