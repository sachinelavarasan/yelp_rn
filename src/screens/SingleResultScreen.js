import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const SingleResultScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const {
    params: { id },
  } = navigation.state;

  const getApi = async (id) => {
    try {
      const response = await axios.get(`/${id}`);

      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getApi(id);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <View>
      <Text>{data.name}</Text>
      <FlatList
        data={data.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default SingleResultScreen;

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    width: 200,
    height: 100,
    marginBottom: 5,
  },
});
