import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

type WishCardProps = {
  cardImage: any;
  carImage: any;
  title: string;
  year: string;
  onDelete: () => void;
};

export function WishCard({ cardImage, carImage, title, year, onDelete }: WishCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('DetalhesWishList', {
      title,
      year,
      carImage,
    });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleNavigate}>
      {/* Fundo do card (com logo da Hot Wheels) */}
      <Image source={cardImage} style={styles.cardImage} />

      {/* Botão de deletar no canto superior esquerdo */}
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>

      {/* Título e ano centralizados */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      {/* Imagem do carro centralizada */}
      <Image source={carImage} style={styles.carImage} resizeMode="contain" />
    </TouchableOpacity>
  );
}
