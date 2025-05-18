import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'; // IMPORT FONT AWESOME
import { RootStackParamList } from '../../routes';
import { styles } from './styles';
import { WishCard } from '../../components/WishCard';

const cardBackground = require('../../assets/card-wishlist.png');

const initialData = [
  {
    id: '1',
    carImage: require('../../assets/carro1.png'),
    title: 'Fusca',
    year: '1975',
  },
  {
    id: '2',
    carImage: require('../../assets/carro2.png'),
    title: 'Chevette',
    year: '1980',
  },
  {
    id: '3',
    carImage: require('../../assets/carro3.png'),
    title: 'Opala',
    year: '1978',
  },
];

export default function WishList() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [data, setData] = useState(initialData);

  const handleDelete = (id: string) => {
    Alert.alert(
      'Excluir',
      'Deseja realmente excluir este item?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => setData(prev => prev.filter(item => item.id !== id)),
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }: any) => (
    <WishCard
      cardImage={cardBackground}
      carImage={item.carImage}
      title={item.title}
      year={item.year}
      onDelete={() => handleDelete(item.id)}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/fundo-wishlist.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cardContainer}
          renderItem={renderItem}
        />

        {/* Botão ADICIONAR grande visível */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CriarWishList')}
        >
          <Text style={styles.addButtonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Menu inferior com botão "+" destacado */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../../assets/icon1.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        {/* Botão "+" central, sem fundo */}
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
          <Image source={require('../../assets/icon2.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
