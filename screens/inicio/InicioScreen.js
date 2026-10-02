import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import { casasHogwarts } from '../../data/data';

export default function InicioScreen({ navigation }) {
  const secciones = [
    { id: 'header', tipo: 'header' },
    { id: 'bienvenida', tipo: 'bienvenida' },
    { id: 'casas_titulo', tipo: 'casas_titulo' },
    { id: 'casas_lista', tipo: 'casas_lista' },
    { id: 'frase', tipo: 'frase' },
  ];

  const renderCasasItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.casaCard,
        { backgroundColor: item.colorHex },
        pressed && styles.pressed,
      ]}
      onPress={() => navigation.navigate('CasasTab')}
    >
      <Text style={styles.casaNombre}>{item.nombre}</Text>
      <Text style={styles.casaAnimal}>Emblema: {item.animal}</Text>
    </Pressable>
  );

  const renderElemento = ({ item }) => {
    if (item.tipo === 'header') {
      return (
        <View style={styles.headerContainer}>
        <Image source={require('../../assets/hogwarts.jpg')} style={styles.heroImage}/>
          <View style={styles.overlay}>
            <Text style={styles.heroTitulo}>Mundo Mágico</Text>
            <Text style={styles.heroSubtitulo}>Bienvenido al Colegio Hogwarts de Magia y Hechicería</Text>
          </View>
        </View>
      );
    }

    if (item.tipo === 'bienvenida') {
      return (
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>📜 Tu Viaje Empieza Aquí</Text>
          <Text style={styles.cardTexto}>
            Explora la enciclopedia del universo mágico. Descubre secretos sobre personajes icónicos, hechizos poderosos, criaturas legendarias y las míticas casas de Hogwarts.
          </Text>
          <Pressable
            style={({ pressed }) => [styles.botonExplorar, pressed && styles.pressed]}
            onPress={() => navigation.navigate('ExplorarTab')}
          >
            <Text style={styles.textoBoton}>Comenzar a Explorar</Text>
          </Pressable>
        </View>
      );
    }

    if (item.tipo === 'casas_titulo') {
      return (
        <Text style={styles.seccionTitulo}>Las Casas de Hogwarts</Text>
      );
    }

    if (item.tipo === 'casas_lista') {
      return (
        <FlatList
          data={casasHogwarts}
          renderItem={renderCasasItem}
          keyExtractor={(casa) => casa.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listaCasasContainer}
        />
      );
    }

    if (item.tipo === 'frase') {
      return (
        <View style={styles.fraseCard}>
          <Text style={styles.fraseTexto}>
            "Son nuestras elecciones las que muestran lo que somos, mucho más que nuestras habilidades."
          </Text>
          <Text style={styles.fraseAutor}>— Albus Dumbledore</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={secciones}
        renderItem={renderElemento}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  contentContainer: {
    paddingBottom: 24,
  },
  headerContainer: {
    height: 220,
    position: 'relative',
    marginBottom: 16,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  heroTitulo: {
    color: '#D3A625',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitulo: {
    color: '#E0E0E0',
    fontSize: 14,
    marginTop: 4,
  },
  cardInfo: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  cardTitulo: {
    color: '#D3A625',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTexto: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  botonExplorar: {
    backgroundColor: '#740001',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#D3A625',
    borderWidth: 1,
  },
  textoBoton: {
    color: '#D3A625',
    fontWeight: 'bold',
    fontSize: 15,
  },
  seccionTitulo: {
    color: '#D3A625',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  listaCasasContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  casaCard: {
    width: 140,
    height: 90,
    padding: 12,
    borderRadius: 10,
    marginRight: 12,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3A625',
  },
  casaNombre: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  casaAnimal: {
    color: '#E0E0E0',
    fontSize: 12,
    marginTop: 4,
  },
  fraseCard: {
    backgroundColor: '#151515',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#D3A625',
  },
  fraseTexto: {
    color: '#DDDDDD',
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight: 20,
  },
  fraseAutor: {
    color: '#D3A625',
    textAlign: 'right',
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 13,
  },
  pressed: {
    opacity: 0.7,
  },
});