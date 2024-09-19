import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function Tela2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.title}>Meus Hobbies</Text>

      <Text style={styles.hobbyTitle}>Gosto de fazer academia</Text>
      <Image
        source={{ uri: 'https://f.i.uol.com.br/fotografia/2023/04/27/1682601669644a76c549a27_1682601669_3x2_md.jpg' }}
        style={styles.image}
      />

      <Text style={styles.hobbyTitle}>Sou atleta de fisiculturismo</Text>
      <Image
        source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*QLfAFNF0YXUOqvP3dKXYcA.jpeg' }}
        style={styles.image}
      />

      <Text style={styles.hobbyTitle}>Faço rachas ilegais na minha cidade</Text>
      <Image
        source={{ uri: 'https://gazetadepinheiros.com.br/images/noticias/9449/18075608_Racha_-_01.jpeg' }}
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
  hobbyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
