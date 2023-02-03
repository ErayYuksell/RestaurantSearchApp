import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.imageTitle}>{result.name}</Text>
      <Text>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 150,
    width: 270,
    borderRadius: 4,
    marginBottom: 5,
  },
  imageTitle: {
    fontWeight: "bold",
  },
});

export default ResultDetail;
