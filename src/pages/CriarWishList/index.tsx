import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // IMPORTANTE: import do FontAwesome
import { styles } from './styles';

export default function CriarWishList() {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [imagemUri, setImagemUri] = useState<string | null>(null);
  const [mostrarInputImagem, setMostrarInputImagem] = useState(false);
  const [inputTemporario, setInputTemporario] = useState('');
  const navigation = useNavigation();

  const handleImagemPress = () => {
    setMostrarInputImagem(!mostrarInputImagem);
  };

  const handleSalvar = () => {
    if (!modelo || !ano || !imagemUri) {
      Alert.alert('Erro', 'Preencha todos os campos e adicione uma imagem!');
      return;
    }
    Alert.alert('Sucesso', `Produto "${modelo}" criado!`);
    setModelo('');
    setAno('');
    setImagemUri(null);
    setInputTemporario('');
    setMostrarInputImagem(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.imagemBox} onPress={handleImagemPress}>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.imagemSelecionada} />
          ) : (
            <Image
              source={require('../../assets/image-placeholder.png')}
              style={styles.iconeImagem}
            />
          )}
        </TouchableOpacity>

        {mostrarInputImagem && (
          <TextInput
            style={styles.inputImagem}
            placeholder="https://exemplo.com/imagem.jpg"
            placeholderTextColor="#aaa"
            value={inputTemporario}
            onChangeText={(text) => {
              setInputTemporario(text);
              setImagemUri(text);
            }}
          />
        )}

        <View style={styles.linhaInput}>
          <Text style={styles.label}>Modelo</Text>
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            placeholderTextColor="#fff"
            value={modelo}
            onChangeText={setModelo}
          />
        </View>

        <View style={styles.linhaInput}>
          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={styles.input}
            placeholder="Ano"
            placeholderTextColor="#fff"
            value={ano}
            keyboardType="numeric"
            onChangeText={setAno}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.botaoAdicionar} onPress={handleSalvar}>
        <Text style={styles.textoBotao}>ADICIONAR</Text>
      </TouchableOpacity>

      {/* Menu inferior atualizado */}
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

        {/* Botão "+" sem fundo, com margem para destaque */}
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
