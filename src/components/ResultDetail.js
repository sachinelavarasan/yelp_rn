import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.name}>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    width: 200,
    height: 100,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
