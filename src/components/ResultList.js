import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {results.length ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Single", { id: item.id });
                }}
              >
                <ResultDetail data={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.message}>No items found</Text>
      )}
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 15,
    marginBottom: 5,
  },
});
