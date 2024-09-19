import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.info}>Nome: Arthur Nunis Cardozo</Text>
      <Text style={styles.info}>Idade: 17 anos</Text>
      <Text style={styles.info}>Turma: 3C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
});
