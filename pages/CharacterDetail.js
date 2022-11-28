import { useEffect, useState } from 'react';
import { Image, View, FlatList, Text, StyleSheet } from 'react-native';


const CharacterDetail = ({ route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://192.168.18.79:3000/characters?id=' + route.params.msg)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <Text style={styles.textJudul}>{item.name}</Text>
              <Image source={{ uri: item.photoUrl }} style={styles.img} />
              <Text style={styles.textnama}>Description </Text>
              <View style={styles.container}>
                <Text style={styles.text1}>School </Text>
                <View style={styles.circle}>
                  <Text style={styles.text2}>{item.school}</Text>
                </View>
              </View>
              <View style={styles.container}>
                <Text style={styles.text1}>Birthday </Text>
                <View style={styles.circle}>
                  <Text style={styles.text2}>{item.birthday}</Text>
                </View>
              </View>
              <View style={styles.container}>
                <Text style={styles.text1}>Damage Type </Text>
                <View style={styles.circle}>
                  <Text style={styles.text2}>{item.damageType}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'space-between', // ignore this - we'll come back to it
    flexDirection: 'row',
    marginBottom: 10,
  },
  square: {
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
  circle: {
    width: 130,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: { color: '#626262', fontSize: 18, marginBottom: 3 },
  text2: { color: '#FFFFFF', fontSize: 14, fontWeight:'bold' },
  textnama: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    opacity: 0.7,
  },
  textJudul: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    alignSelf: 'center',
    opacity: 0.8,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 3,
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 18,
    marginHorizontal: 35,
    padding: 30,
    borderWidth: 3,
    borderColor: '#000000',
  },
});

export default CharacterDetail;