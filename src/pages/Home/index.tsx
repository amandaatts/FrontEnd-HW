import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import CarCard from '../../components/CarCard/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

const cars = [
  {
    id: '1',
    title: 'TRACK RIPPER',
    year: 2015,
    numero: '3/90',
    colecao: "LET’S RACE",
    tipo: 'CARRO',
    image: require('../../assets/carro1.png'),
  },
  {
    id: '2',
    title: 'TRACK RIPPER',
    year: 2015,
    numero: '3/90',
    colecao: "LET’S RACE",
    tipo: 'CARRO',
    image: require('../../assets/carro2.png'),
  },
  {
    id: '3',
    title: 'TRACK RIPPER',
    year: 2015,
    numero: '3/90',
    colecao: "LET’S RACE",
    tipo: 'CARRO',
    image: require('../../assets/carro3.png'),
  },
  {
    id: '4',
    title: 'TRACK RIPPER',
    year: 2015,
    numero: '3/90',
    colecao: "LET’S RACE",
    tipo: 'CARRO',
    image: require('../../assets/carro1.png'),
  },
];

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logoHW.png')} style={styles.logo} />
        <Text style={styles.title}>MINHA COLEÇÃO</Text>
      </View>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <CarCard
            title={item.title}
            year={item.year}
            numero={item.numero}
            colecao={item.colecao}
            tipo={item.tipo}
            image={item.image}
            onPress={() =>
              navigation.navigate('DetalhesHome', {
                modelo: item.title,
                ano: String(item.year),
                numero: item.numero,
                colecao: item.colecao,
                tipo: item.tipo,
              })
            }
          />
        )}
      />

      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>FILTRAR</Text>
      </TouchableOpacity>

      {/* ✅ Novo menu inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../../assets/icon1.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: -10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Criar')}
        >
          <FontAwesome name="plus" size={34} color="#FFD700" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('WishList')}
        >
          <Image
            source={require('../../assets/icon2.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
