import {Link, link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/avatar.jpg')}
        style={styles.avatar}
        />
      </View>

      <View style={styles.content}>
          <Text style={styles.title}>
          ★WishList
          </Text>
          <Text style={styles.text}>
          Um app prático para criar listas de desejos, organizar futuras compras e comparar produtos como roupas, eletrônicos, livros e mais.
          </Text>
          <Link style={styles.button} href={"/home"}>
            <Text style={styles.buttonText}>Acessar</Text>
          </Link>

        </View>

      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111119',
  },

  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar:{
    width: 300,
    height: 300,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#dfe0d8',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#976532'
  },
  text:{
    fontSize: 17,
    color: '#776E64',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: '15%',
    backgroundColor: '#976532',
    alignSelf: 'center',
    borderRadius: 50, 
    paddingVertical: 15,
    width:'60%',
    textAlign: 'center', 
  },
  buttonText: {
    fontSize: 22,
    color: '#dfe0d8',
    fontWeight: 'bold',
  }
});