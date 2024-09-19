import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function Tela3() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.title}>Meus Filmes Favoritos</Text>

      <Text style={styles.movieTitle}>Prenda-me se for capaz</Text>
      <Image
        source={{ uri: 'https://br.web.img3.acsta.net/pictures/210/100/21010048_20130603234956231.jpg' }}
        style={styles.image}
      />

      <Text style={styles.movieTitle}>O Lobo de Wall Street</Text>
      <Image
        source={{ uri: 'https://www.realepapelaria.com.br/wp-content/uploads/2017/03/O-lobo-de-wall-street.jpg' }}
        style={styles.image}
      />

      <Text style={styles.movieTitle}>Cães de Guerra</Text>
      <Image
        source={{ uri: 'https://a-static.mlcdn.com.br/450x450/dvd-caes-de-guerra-warner-bros/perolafilmes/13476/cf3dbf38cf26a397f57beb3b3ab78555.jpeg' }}
        style={styles.image}
      />

      <Text style={styles.movieTitle}>O Poderoso Chefão</Text>
      <Image
        source={{ uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/o-poderoso-chefao-50-anos/008274f7-a76d-484f-8b5b-1c639c2ce46b.jpg' }}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
