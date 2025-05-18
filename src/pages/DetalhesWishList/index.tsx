import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome
import { RootStackParamList } from '../../routes';
import { styles } from './styles';

type DetalhesWishListRouteProp = RouteProp<RootStackParamList, 'DetalhesWishList'>;

export default function DetalhesWishList() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<DetalhesWishListRouteProp>();
  const { title, year } = route.params;

  const [isEditable, setIsEditable] = useState(false);
  const [modelo, setModelo] = useState(title);
  const [ano, setAno] = useState(year);

  const handleEditar = () => {
    setIsEditable(true);
  };

  const handleConcluir = () => {
    setIsEditable(false);
    Alert.alert('Editado com sucesso');
    // Salvar mudanças aqui se precisar
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../../assets/carro1.png')} style={styles.carImage} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Modelo</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={modelo}
            onChangeText={setModelo}
            editable={isEditable}
            placeholder="Modelo"
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={ano}
            onChangeText={setAno}
            editable={isEditable}
            placeholder="Ano"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        {!isEditable ? (
          <TouchableOpacity style={styles.editButton} onPress={handleEditar}>
            <Text style={styles.buttonText}>EDITAR</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.deleteButton} onPress={handleConcluir}>
            <Text style={styles.buttonText}>CONCLUIR</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Menu inferior com botão "+" destacado */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../../assets/icon1.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        {/* Botão "+" central sem fundo */}
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
