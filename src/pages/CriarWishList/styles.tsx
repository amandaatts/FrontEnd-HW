import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004AAD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 80, // espaço pro menu
  },
  card: {
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  imagemBox: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  imagemSelecionada: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  iconeImagem: {
    width: 50,
    height: 50,
    tintColor: '#555',
  },
  inputImagem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
    width: '100%',
  },
  linhaInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    width: 70,
  },
  input: {
    backgroundColor: '#004AAD', // Azul escuro
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  botaoAdicionar: {
    marginTop: 20,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Menu inferior
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#004AAD', // Azul escuro
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  menuButton: {
    backgroundColor: '#004AAD',
    padding: 12,
    borderRadius: 30,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700', // Dourado
  },
});
