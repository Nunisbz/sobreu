import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Arthur Nunis - 3C</Text>
      <Link href="/">
        <Pressable style={styles.backButton}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
