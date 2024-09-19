import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./components/mimim.jpg')}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>Sobre Mim</Text>

      <Link href="/tela1" style={styles.link}>
        <Text style={styles.buttonText}>Tela 1: Minhas Informações</Text>
      </Link>

      <Link href="/tela2" style={styles.link}>
        <Text style={styles.buttonText}>Tela 2: Meus Hobbies</Text>
      </Link>

      <Link href="/tela3" style={styles.link}>
        <Text style={styles.buttonText}>Tela 3: Filmes favoritos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 50,
    padding: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
