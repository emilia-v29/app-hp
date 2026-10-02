import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { casasHogwarts } from '../../data/data';

export default function CasasScreen() {
  const renderCasaCard = ({ item }) => (
    <View style={[styles.casaCard, { borderColor: item.colorHex }]}>
    <Image source={item.imagen} style={styles.casaImagen} />
      
      <View style={styles.cardHeader}>
        <Text style={styles.casaNombre}>{item.nombre}</Text>
        <Text style={[styles.badgeElemento, { backgroundColor: item.colorHex }]}>
          {item.elementos}
        </Text>
      </View>

      <Text style={styles.descripcionText}>{item.descripcion}</Text>

      <View style={styles.detallesGrid}>
        <View style={styles.detalleItem}>
          <Text style={styles.detalleEtiqueta}>Fundador:</Text>
          <Text style={styles.detalleValor}>{item.fundador}</Text>
        </View>
        <View style={styles.detalleItem}>
          <Text style={styles.detalleEtiqueta}>Animal Emblema:</Text>
          <Text style={styles.detalleValor}>{item.animal}</Text>
        </View>
        <View style={styles.detalleItem}>
          <Text style={styles.detalleEtiqueta}>Colores:</Text>
          <Text style={styles.detalleValor}>{item.colores}</Text>
        </View>
        <View style={styles.detalleItem}>
          <Text style={styles.detalleEtiqueta}>Fantasma:</Text>
          <Text style={styles.detalleValor}>{item.fantasma}</Text>
        </View>
        <View style={styles.detalleItem}>
          <Text style={styles.detalleEtiqueta}>Sala Común:</Text>
          <Text style={styles.detalleValor}>{item.salaComun}</Text>
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.tituloPrincipal}>Las 4 Casas de Hogwarts</Text>
      <Text style={styles.subtituloPrincipal}>
        Conoce los valores, emblemas y secretos que definen a cada una de las casas del colegio.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={casasHogwarts}
        renderItem={renderCasaCard}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  headerContainer: {
    paddingVertical: 16,
  },
  tituloPrincipal: {
    color: '#D3A625',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtituloPrincipal: {
    color: '#AAAAAA',
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
  casaCard: {
    backgroundColor: '#161616',
    borderRadius: 14,
    marginBottom: 20,
    padding: 16,
    borderWidth: 2,
  },
  casaImagen: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  casaNombre: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  badgeElemento: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  descripcionText: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  detallesGrid: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#222222',
  },
  detalleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  detalleEtiqueta: {
    color: '#888888',
    fontSize: 13,
    fontWeight: '600',
  },
  detalleValor: {
    color: '#D3A625',
    fontSize: 13,
    fontWeight: '500',
  },
});