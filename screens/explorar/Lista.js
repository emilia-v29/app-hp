import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import { elementosMagicos } from '../../data/data';

export default function Lista({ navigation }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Personajes');

  const categorias = ['Personajes', 'Hechizos', 'Criaturas', 'Lugares de Hogwarts'];

  const elementosFiltrados = elementosMagicos.filter(
    (item) => item.categoria === categoriaSeleccionada
  );

  const renderFiltroItem = ({ item }) => {
    const esActivo = categoriaSeleccionada === item;
    return (
      <Pressable
        style={({ pressed }) => [
          styles.filtroChip,
          esActivo && styles.filtroChipActivo,
          pressed && styles.pressed,
        ]}
        onPress={() => setCategoriaSeleccionada(item)}
      >
        <Text style={[styles.filtroTexto, esActivo && styles.filtroTextoActivo]}>
          {item}
        </Text>
      </Pressable>
    );
  };

  const renderElementoCard = ({ item }) => (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => navigation.navigate('Detalles', { id: item.id, nombre: item.nombre })}
    >
      <Image source={item.imagen} style={styles.cardImagen} />
      <View style={styles.cardContenido}>
        <Text style={styles.cardTitulo}>{item.nombre}</Text>
        <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
        <Text style={styles.cardResumen} numberOfLines={2}>
          {item.resumen}
        </Text>
      </View>
    </Pressable>
  );

  const renderHeader = () => (
    <View style={styles.headerContenido}>
      <Text style={styles.tituloSeccion}>Enciclopedia Mágica</Text>
      <FlatList
        data={categorias}
        renderItem={renderFiltroItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtrosLista}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={elementosFiltrados}
        renderItem={renderElementoCard}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  listaContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerContenido: {
    paddingTop: 16,
    paddingBottom: 12,
  },
  tituloSeccion: {
    color: '#D3A625',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  filtrosLista: {
    paddingBottom: 8,
  },
  filtroChip: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  filtroChipActivo: {
    backgroundColor: '#740001',
    borderColor: '#D3A625',
  },
  filtroTexto: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '600',
  },
  filtroTextoActivo: {
    color: '#D3A625',
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
  },
  cardImagen: {
    width: 110,
    height: '100%',
    minHeight: 120,
  },
  cardContenido: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  cardTitulo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitulo: {
    color: '#AAAAAA',
    fontSize: 12,
    marginBottom: 6,
    fontStyle: 'italic',
  },
  cardResumen: {
    color: '#CCCCCC',
    fontSize: 12,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.8,
  },
});