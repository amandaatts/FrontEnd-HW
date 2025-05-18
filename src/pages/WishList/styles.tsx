import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardContainer: {
    paddingTop: 180,
    paddingBottom: 120,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#004AAD',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 80,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* Estilos do menu inferior com cor vermelha */
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#B22222', // Vermelho FireBrick
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  menuButton: {
    backgroundColor: '#B22222', // Mesmo vermelho para o botão, para não destoar
    padding: 12,
    borderRadius: 30,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700', // Amarelo dourado
  },
});
