import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  year: number;
  numero: string;
  colecao: string;
  tipo: string;
  image: any;
  onPress: () => void;
};

export default function CarCard({ title, year, numero, colecao, tipo, image, onPress }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.carImage} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.description}>
          {`${tipo.toUpperCase()} • ${colecao.toUpperCase()} • ${numero}`}
        </Text>
      </View>
      <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}
