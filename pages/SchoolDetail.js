import { useEffect, useState } from 'react';
import { Image, View, FlatList, Text, StyleSheet } from 'react-native';


const SchoolDetail = ({ route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://192.168.18.79:3000/academy?id=' + route.params.msg)
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
              <Text style={styles.textJudul}>{item.school}</Text>
              <Image source={{ uri: item.imageSchool }} style={styles.img} />
              <Text style={styles.textnama}>Description </Text>
              <View style={styles.container}>
                <View style={styles.bordertext}>
                  <Text style={styles.desc}>{item.description}</Text>
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
  bordertext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius:10,
    borderWidth: 1,
    flexDirection: 'column',
  },
  desc: { 
    color: '#00000', 
    fontSize: 20, 
    fontWeight:'bold',
    textAlign:'center',
    padding:10
  },
  textnama: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    opacity: 0.7,
    textAlign:'center'
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

export default SchoolDetail;