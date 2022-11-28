import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function School({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://192.168.18.79:3000/academy')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <View style={{ flex: 1, marginTop: 20,  }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate('AcademyDetail', { msg: item.id })}>
            <View style={styles.oddItemListContainer}>
              <Image source={{ uri: item.imageSchool }} style={styles.ImageMovie} />
              <View style={styles.itemListContent}>
                <Text style={styles.itemListText}>{item.school}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ImageMovie: {
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListText: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default School;