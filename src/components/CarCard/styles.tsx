import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFD600',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,      // entre 16 e 24
    paddingHorizontal: 16,    // entre 14 e 20
    marginBottom: 18,         // entre 16 e 20
    marginHorizontal: 18,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    elevation: 5,
  },
  carImage: {
    width: 85,   
    height: 58,   
    resizeMode: 'contain',
    marginRight: 16, 
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#0033A0',
    fontSize: 17,        // entre 16 e 18
    fontWeight: 'bold',
  },
  year: {
    color: '#FFFFFF',
    fontSize: 11,        // entre 10 e 12
    fontWeight: '600',
    marginTop: 2,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 13,        // entre 12.5 e 14
    marginTop: 3,
    fontWeight: '500',
  },
  arrowButton: {
    paddingLeft: 12,
    paddingRight: 5,
  },
  arrow: {
    color: '#0033A0',
    fontSize: 26,        // entre 24 e 28
    fontWeight: 'bold',
  },
});
