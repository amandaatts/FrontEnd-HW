import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  cardContainer: {
    width: (width - 80) / 2,
    height: 230,
    margin: 10,
    alignItems: 'center',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 12,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    left: 25, // mais à direita
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 22, // menor
    height: 22, // menor
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // ajustado para combinar com tamanho menor
    lineHeight: 16,
  },
  textWrapper: {
    marginTop: 80,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  year: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  carImage: {
    width: '75%',
    height: 100,
  },
});
