import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import { elementosMagicos } from '../../data/data';

export default function Detalles({ route, navigation }) {
  const { id } = route.params || {};
  const elemento = elementosMagicos.find((item) => item.id === id) || elementosMagicos[0];

  const secciones = [
    { id: 'boton_volver', tipo: 'boton_volver' },
    { id: 'header', tipo: 'header' },
    { id: 'detalles_titulo', tipo: 'detalles_titulo' },
    { id: 'detalles_lista', tipo: 'detalles_lista' },
    { id: 'biografia_titulo', tipo: 'biografia_titulo' },
    { id: 'biografia_contenido', tipo: 'biografia_contenido' },
  ];

  const renderDetalleItem = ({ item }) => (
    <View style={styles.detalleFila}>
      <Text style={styles.detalleEtiqueta}>{item.etiqueta}:</Text>
      <Text style={styles.detalleValor}>{item.valor}</Text>
    </View>
  );

  const renderElemento = ({ item }) => {
    if (item.tipo === 'boton_volver') {
      return (
        <Pressable
          style={({ pressed }) => [styles.botonVolver, pressed && styles.pressed]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoBotonVolver}>← Volver</Text>
        </Pressable>
      );
    }

    if (item.tipo === 'header') {
      return (
        <View style={styles.headerContainer}>
        <Image source={elemento.imagen} style={styles.imagenPrincipal} />
          <View style={styles.headerInfo}>
            <Text style={styles.categoriaBadge}>{elemento.categoria}</Text>
            <Text style={styles.nombreTitulo}>{elemento.nombre}</Text>
            <Text style={styles.subtituloText}>{elemento.subtitulo}</Text>
            {elemento.casa ? <Text style={styles.casaText}>Afiliación: {elemento.casa}</Text> : null}
          </View>
        </View>
      );
    }

    if (item.tipo === 'detalles_titulo') {
      return (
        <Text style={styles.seccionTitulo}>Información Clave</Text>
      );
    }

    if (item.tipo === 'detalles_lista') {
      return (
        <View style={styles.cardInfo}>
          <FlatList
            data={elemento.detalles}
            renderItem={renderDetalleItem}
            keyExtractor={(det, index) => index.toString()}
          />
        </View>
      );
    }

    if (item.tipo === 'biografia_titulo') {
      return (
        <Text style={styles.seccionTitulo}>Historia / Descripción</Text>
      );
    }

    if (item.tipo === 'biografia_contenido') {
      return (
        <View style={styles.cardInfo}>
          <Text style={styles.biografiaTexto}>{elemento.biografia}</Text>
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
  botonVolver: {
    alignSelf: 'flex-start',
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D3A625',
  },
  textoBotonVolver: {
    color: '#D3A625',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerContainer: {
    marginBottom: 16,
  },
  imagenPrincipal: {
    width: '100%',
    height: 250,
  },
  headerInfo: {
    padding: 16,
    backgroundColor: '#161616',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  categoriaBadge: {
    color: '#D3A625',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  nombreTitulo: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtituloText: {
    color: '#AAAAAA',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 2,
  },
  casaText: {
    color: '#D3A625',
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
  seccionTitulo: {
    color: '#D3A625',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  cardInfo: {
    backgroundColor: '#161616',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: 12,
  },
  detalleFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  detalleEtiqueta: {
    color: '#888888',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detalleValor: {
    color: '#EEEEEE',
    fontSize: 14,
    flexShrink: 1,
    textAlign: 'right',
  },
  biografiaTexto: {
    color: '#DDDDDD',
    fontSize: 14,
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.7,
  },
});