import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0055A4',
  },
  header: {
    backgroundColor: '#FF0000',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 0, // <-- Reduzido para não deixar o header alto
    position: 'relative',
  },
  logo: {
    width: 320,
    height: 130,
    resizeMode: 'contain',
    marginTop: -20,      // Faz a logo descer e sobrepor o fundo vermelho
    marginBottom: -40,   // Junta a logo com o título
    zIndex: 2,           // Garante que fique acima de outros elementos
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    zIndex: 1,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  carImage: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
    marginRight: 12,
  },
  carDetails: {
    flex: 1,
  },
  carTitle: {
    color: '#003399',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carYear: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: 4,
  },
  carDesc: {
    fontSize: 11,
    color: '#FFFFFF',
    marginTop: 2,
  },
  arrowButton: {
    paddingLeft: 8,
    padding: 8,
  },
  arrow: {
    fontSize: 26,
    color: '#003399',
  },
  filterButton: {
    backgroundColor: '#0055A4',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFD700',
    position: 'absolute',
    bottom: 100,
  },
  filterText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#003366',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  menuButton: {
    backgroundColor: '#003366',
    padding: 12,
    borderRadius: 30,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700',
  },
  
});
