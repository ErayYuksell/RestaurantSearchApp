import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // bir nesne geleceği zaman null deriz
  const id = navigation.getParam("id"); //navigation da kullanılan id nesnesini buraya alıyor

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>

      <View>
        <Text style={styles.text}>Phone Number: {result.display_phone}</Text>
        <Text style={styles.text}>Alias: {result.alias}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
    borderRadius: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  container: {
    flex: 1,
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
  },
});

export default ResultShowScreen;
